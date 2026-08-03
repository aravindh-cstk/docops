#!/usr/bin/env node

/**
 * Unit Test: Title Prefix Extraction
 * Tests extraction of product prefix from title (e.g., [Studio] -> studio)
 */

class TitlePrefixTest {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.tests = [];
  }

  extractTitlePrefix(title) {
    if (!title) return null;
    const match = title.match(/^\[([^\]]+)\]/);
    return match ? match[1] : null;
  }

  // CS-Docs folder mapping
  TITLE_PREFIX_TO_FOLDER = {
    'Administration': 'administration',
    'Automations guides and connectors': 'agent-os',
    'Analytics Content': 'analytics',
    'AM2.0': 'assets',
    'Author Content': 'content-managers',
    'Data & Insights': 'data-and-insights',
    'Get Started with CS': 'get-started',
    'Taxonomy': 'headless-cms',
    'Contentstack Launch': 'launch',
    'Marketplace guides and apps': 'marketplace',
    'Introduction to Contentstack - a Headless CMS': 'overview',
    'Personalize': 'personalize',
    'Second level navigation': 'developers',
    'Studio': 'studio',
  };

  getFolder(prefix) {
    return this.TITLE_PREFIX_TO_FOLDER[prefix] || null;
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

  // Test 1: Valid prefixes
  testValidPrefixes() {
    console.log('\n📝 Test 1: Valid Prefixes\n');
    const testCases = [
      { title: '[Studio] - About Studio', expected: 'Studio', folder: 'studio' },
      { title: '[Administration] - Admin Guide', expected: 'Administration', folder: 'administration' },
      { title: '[AM2.0] - Asset Management', expected: 'AM2.0', folder: 'assets' },
      { title: '[Personalize] - Personalization Guide', expected: 'Personalize', folder: 'personalize' },
    ];

    testCases.forEach(test => {
      const prefix = this.extractTitlePrefix(test.title);
      this.assert(
        `Extract prefix from "${test.title}"`,
        prefix === test.expected,
        `Expected: ${test.expected}, Got: ${prefix}`
      );

      const folder = this.getFolder(prefix);
      this.assert(
        `Map prefix "${prefix}" to folder`,
        folder === test.folder,
        `Expected: ${test.folder}, Got: ${folder}`
      );
    });
  }

  // Test 2: Invalid/unknown prefix
  testInvalidPrefix() {
    console.log('\n📝 Test 2: Invalid Prefix\n');
    const title = '[UnknownProduct] - Title';
    const prefix = this.extractTitlePrefix(title);
    const folder = this.getFolder(prefix);

    this.assert('Extract unknown prefix', prefix === 'UnknownProduct', `Got: ${prefix}`);
    this.assert('Unknown prefix returns null folder', folder === null, `Expected null, got: ${folder}`);
  }

  // Test 3: Missing prefix
  testMissingPrefix() {
    console.log('\n📝 Test 3: Missing Prefix\n');
    const titles = [
      'About Studio',
      'Getting Started',
      '- Missing Prefix'
    ];

    titles.forEach(title => {
      const prefix = this.extractTitlePrefix(title);
      this.assert(
        `Missing prefix in "${title}"`,
        prefix === null,
        `Expected null, got: ${prefix}`
      );
    });
  }

  // Test 4: Case sensitivity
  testCaseSensitivity() {
    console.log('\n📝 Test 4: Case Sensitivity\n');
    const testCases = [
      { title: '[studio] - Lowercase', expected: 'studio', folder: null }, // lowercase should not match
      { title: '[STUDIO] - Uppercase', expected: 'STUDIO', folder: null },
      { title: '[Studio] - Correct case', expected: 'Studio', folder: 'studio' },
    ];

    testCases.forEach(test => {
      const prefix = this.extractTitlePrefix(test.title);
      this.assert(
        `Case sensitivity in "${test.title}"`,
        prefix === test.expected,
        `Expected: ${test.expected}, Got: ${prefix}`
      );

      const folder = this.getFolder(prefix);
      this.assert(
        `Folder for case: "${prefix}"`,
        folder === test.folder,
        `Expected: ${test.folder}, Got: ${folder}`
      );
    });
  }

  // Test 5: Multiple brackets
  testMultipleBrackets() {
    console.log('\n📝 Test 5: Multiple Brackets\n');
    const titles = [
      '[Studio] [API] - Title',
      '[Studio] - [API] Guide',
      '[[Studio]] - Nested',
    ];

    titles.forEach(title => {
      const prefix = this.extractTitlePrefix(title);
      this.assert(
        `Extract first bracket only from "${title}"`,
        prefix === 'Studio' || prefix === '[Studio',
        `Got: ${prefix}`
      );
    });
  }

  // Test 6: Whitespace handling
  testWhitespaceHandling() {
    console.log('\n📝 Test 6: Whitespace Handling\n');
    const testCases = [
      { title: '[ Studio ] - With spaces', expected: ' Studio ' },
      { title: '[Studio] - Normal', expected: 'Studio' },
      { title: '[  Studio  ] - Extra spaces', expected: '  Studio  ' },
    ];

    testCases.forEach(test => {
      const prefix = this.extractTitlePrefix(test.title);
      this.assert(
        `Whitespace in prefix from "${test.title}"`,
        prefix === test.expected,
        `Expected: "${test.expected}", Got: "${prefix}"`
      );
    });
  }

  // Test 7: Empty brackets
  testEmptyBrackets() {
    console.log('\n📝 Test 7: Empty Brackets\n');
    const title = '[] - Empty prefix';
    const prefix = this.extractTitlePrefix(title);

    this.assert('Empty brackets returns empty string', prefix === '', `Got: "${prefix}"`);
    this.assert('Empty string is falsy', !prefix, 'Empty string should be treated as falsy');
  }

  // Test 8: Special characters in prefix
  testSpecialCharactersInPrefix() {
    console.log('\n📝 Test 8: Special Characters\n');
    const testCases = [
      { title: '[Get Started with CS] - Title', expected: 'Get Started with CS' },
      { title: '[Data & Insights] - Title', expected: 'Data & Insights' },
      { title: '[Marketplace guides and apps] - Title', expected: 'Marketplace guides and apps' },
      { title: '[AM2.0] - Title', expected: 'AM2.0' },
    ];

    testCases.forEach(test => {
      const prefix = this.extractTitlePrefix(test.title);
      const folder = this.getFolder(prefix);

      this.assert(
        `Extract special chars from "${test.title}"`,
        prefix === test.expected,
        `Expected: ${test.expected}, Got: ${prefix}`
      );

      this.assert(
        `Map special char prefix to folder`,
        folder !== null,
        'Should find folder mapping'
      );
    });
  }

  // Test 9: No closing bracket
  testMissingClosingBracket() {
    console.log('\n📝 Test 9: Missing Closing Bracket\n');
    const titles = [
      '[Studio - No closing',
      '[API Only opening',
    ];

    titles.forEach(title => {
      const prefix = this.extractTitlePrefix(title);
      this.assert(
        `Missing closing bracket in "${title}"`,
        prefix === null,
        `Expected null, got: ${prefix}`
      );
    });
  }

  // Test 10: All valid CS-Docs prefixes
  testAllValidPrefixes() {
    console.log('\n📝 Test 10: All Valid CS-Docs Prefixes\n');
    const prefixes = Object.keys(this.TITLE_PREFIX_TO_FOLDER);

    prefixes.forEach(prefix => {
      const title = `[${prefix}] - Test Title`;
      const extractedPrefix = this.extractTitlePrefix(title);
      const folder = this.getFolder(extractedPrefix);

      this.assert(
        `Map "${prefix}" to folder`,
        folder === this.TITLE_PREFIX_TO_FOLDER[prefix],
        `Expected: ${this.TITLE_PREFIX_TO_FOLDER[prefix]}, Got: ${folder}`
      );
    });
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 TITLE PREFIX EXTRACTION TEST SUMMARY\n');
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
    console.log('🧪 TITLE PREFIX EXTRACTION TESTS\n');
    this.testValidPrefixes();
    this.testInvalidPrefix();
    this.testMissingPrefix();
    this.testCaseSensitivity();
    this.testMultipleBrackets();
    this.testWhitespaceHandling();
    this.testEmptyBrackets();
    this.testSpecialCharactersInPrefix();
    this.testMissingClosingBracket();
    this.testAllValidPrefixes();
    this.printSummary();
    process.exit(this.failed > 0 ? 1 : 0);
  }
}

new TitlePrefixTest().run();
