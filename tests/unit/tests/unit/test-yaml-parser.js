#!/usr/bin/env node

/**
 * Unit Test: YAML Frontmatter Parsing
 * Tests markdown frontmatter extraction and validation
 */

import fs from 'fs';
import path from 'path';

class YAMLParserTest {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.tests = [];
  }

  parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { frontmatter: {}, body: content, error: null };

    const frontmatterText = match[1];
    const body = match[2];
    const frontmatter = {};

    frontmatterText.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
        frontmatter[key.trim()] = value;
      }
    });

    return { frontmatter, body, error: null };
  }

  assert(name, condition, message) {
    if (condition) {
      this.passed++;
      console.log(`  ✅ ${name}`);
    } else {
      this.failed++;
      console.log(`  ❌ ${name}: ${message}`);
    }
    this.tests.push({ name, passed: condition, message });
  }

  // Test 1: Valid frontmatter with all fields
  testValidFrontmatter() {
    console.log('\n📝 Test 1: Valid Frontmatter (All Fields)\n');
    const content = `---
title: "Test Entry"
description: "This is a test"
url: "test-entry"
product: "Contentstack"
---

# Test Entry

This is the body content.`;

    const result = this.parseFrontmatter(content);
    this.assert('Parse valid frontmatter', Object.keys(result.frontmatter).length > 0, 'No fields extracted');
    this.assert('Extract title', result.frontmatter.title === 'Test Entry', `Got: ${result.frontmatter.title}`);
    this.assert('Extract description', result.frontmatter.description === 'This is a test', `Got: ${result.frontmatter.description}`);
    this.assert('Extract url', result.frontmatter.url === 'test-entry', `Got: ${result.frontmatter.url}`);
    this.assert('Extract body', result.body.includes('This is the body'), 'Body not extracted');
  }

  // Test 2: Missing optional fields
  testMissingOptionalFields() {
    console.log('\n📝 Test 2: Missing Optional Fields\n');
    const content = `---
title: "Test"
url: "test"
---

Body content.`;

    const result = this.parseFrontmatter(content);
    this.assert('Parse with missing description', result.frontmatter.title === 'Test', 'Title not extracted');
    this.assert('Still has body', result.body.includes('Body content'), 'Body missing');
  }

  // Test 3: Missing required fields
  testMissingRequiredFields() {
    console.log('\n📝 Test 3: Missing Required Fields\n');
    const content = `---
description: "Missing title and url"
---

Body content.`;

    const result = this.parseFrontmatter(content);
    this.assert('Missing title field', !result.frontmatter.title, 'Should not have title');
    this.assert('Missing url field', !result.frontmatter.url, 'Should not have url');
    this.assert('Missing fields detected', Object.keys(result.frontmatter).length < 2, 'Should have few fields');
  }

  // Test 4: Invalid YAML syntax
  testInvalidYAMLSyntax() {
    console.log('\n📝 Test 4: Invalid YAML Syntax\n');
    const content = `---
title: "Test
url: test-entry
---

Body content.`;

    const result = this.parseFrontmatter(content);
    // Should still parse, but title might be incomplete
    this.assert('Handle missing quote', result.frontmatter.title !== undefined, 'Should attempt parsing');
  }

  // Test 5: Special characters in title
  testSpecialCharactersInTitle() {
    console.log('\n📝 Test 5: Special Characters\n');
    const content = `---
title: "[Studio] - About Studio & Features"
url: "studio-about"
---

Body`;

    const result = this.parseFrontmatter(content);
    this.assert('Parse title with brackets', result.frontmatter.title.includes('[Studio]'), `Got: ${result.frontmatter.title}`);
    this.assert('Parse title with ampersand', result.frontmatter.title.includes('&'), 'Ampersand lost');
    this.assert('Parse title with hyphens', result.frontmatter.title.includes('-'), 'Hyphens lost');
  }

  // Test 6: Multiline descriptions
  testMultilineDescription() {
    console.log('\n📝 Test 6: Multiline Descriptions\n');
    const content = `---
title: "Test"
url: "test"
description: "Line 1"
---

Body with multiple
lines of content.`;

    const result = this.parseFrontmatter(content);
    this.assert('Parse single-line description', result.frontmatter.description === 'Line 1', 'Description incorrect');
    this.assert('Body preserves newlines', result.body.includes('\n'), 'Body should have newlines');
  }

  // Test 7: URLs with hyphens/underscores
  testURLFormatting() {
    console.log('\n📝 Test 7: URL Formatting\n');
    const urls = [
      'test-entry',
      'test_entry',
      'test-entry-123',
      '/api/v1',
      '/studio'
    ];

    urls.forEach(url => {
      const content = `---
title: "Test"
url: "${url}"
---
Body`;
      const result = this.parseFrontmatter(content);
      this.assert(`Parse URL: ${url}`, result.frontmatter.url === url, `Got: ${result.frontmatter.url}`);
    });
  }

  // Test 8: Frontmatter with extra whitespace
  testWhitespaceHandling() {
    console.log('\n📝 Test 8: Whitespace Handling\n');
    const content = `---
title:  "Test"
url:   test-entry
description:    "Description"
---

Body`;

    const result = this.parseFrontmatter(content);
    this.assert('Trim title whitespace', result.frontmatter.title === 'Test', `Got: "${result.frontmatter.title}"`);
    this.assert('Trim url whitespace', result.frontmatter.url === 'test-entry', `Got: "${result.frontmatter.url}"`);
    this.assert('Trim description whitespace', result.frontmatter.description === 'Description', `Got: "${result.frontmatter.description}"`);
  }

  // Test 9: No frontmatter
  testNoFrontmatter() {
    console.log('\n📝 Test 9: No Frontmatter\n');
    const content = `# Test Entry

This is content without frontmatter.`;

    const result = this.parseFrontmatter(content);
    this.assert('Handle missing frontmatter', Object.keys(result.frontmatter).length === 0, 'Should have no fields');
    this.assert('Return entire content as body', result.body === content, 'Should treat entire content as body');
  }

  // Test 10: Quoted values
  testQuotedValues() {
    console.log('\n📝 Test 10: Quoted Values\n');
    const content = `---
title: "Quoted Title"
url: 'single-quoted'
description: "Unquoted description"
---

Body`;

    const result = this.parseFrontmatter(content);
    this.assert('Remove double quotes from title', result.frontmatter.title === 'Quoted Title', `Got: ${result.frontmatter.title}`);
    this.assert('Remove single quotes from url', result.frontmatter.url === 'single-quoted', `Got: ${result.frontmatter.url}`);
  }

  // Test 11: Colons in values
  testColonsInValues() {
    console.log('\n📝 Test 11: Colons in Values\n');
    const content = `---
title: "API: Getting Started"
description: "Learn: step 1, step 2"
url: "api-getting-started"
---

Body`;

    const result = this.parseFrontmatter(content);
    this.assert('Handle colon in title', result.frontmatter.title.includes(':'), `Got: ${result.frontmatter.title}`);
    this.assert('Handle colon in description', result.frontmatter.description.includes(':'), `Got: ${result.frontmatter.description}`);
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 YAML PARSER TEST SUMMARY\n');
    console.log(`✅ Passed: ${this.passed}`);
    console.log(`❌ Failed: ${this.failed}`);
    console.log(`📊 Total:  ${this.passed + this.failed}\n`);

    if (this.failed > 0) {
      console.log('Failed Tests:');
      this.tests.filter(t => !t.passed).forEach(t => {
        console.log(`  - ${t.name}: ${t.message}`);
      });
    }

    console.log('='.repeat(50) + '\n');
  }

  run() {
    console.log('🧪 YAML FRONTMATTER PARSER TESTS\n');
    this.testValidFrontmatter();
    this.testMissingOptionalFields();
    this.testMissingRequiredFields();
    this.testInvalidYAMLSyntax();
    this.testSpecialCharactersInTitle();
    this.testMultilineDescription();
    this.testURLFormatting();
    this.testWhitespaceHandling();
    this.testNoFrontmatter();
    this.testQuotedValues();
    this.testColonsInValues();
    this.printSummary();
    process.exit(this.failed > 0 ? 1 : 0);
  }
}

new YAMLParserTest().run();
