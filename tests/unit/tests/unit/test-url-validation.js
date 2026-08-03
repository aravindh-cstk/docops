#!/usr/bin/env node

/**
 * Unit Test: URL Validation
 * Tests URL format validation and duplicate detection
 */

class URLValidationTest {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.tests = [];
  }

  validateURLFormat(url) {
    if (!url) return { valid: false, error: 'URL is empty' };
    if (typeof url !== 'string') return { valid: false, error: 'URL must be string' };

    // Basic URL validation
    if (!url.startsWith('/')) {
      return { valid: false, error: 'URL must start with /' };
    }

    // Check for invalid characters
    const invalidChars = /[\s<>"{}\|\\^`]/.test(url);
    if (invalidChars) {
      return { valid: false, error: 'URL contains invalid characters' };
    }

    return { valid: true, error: null };
  }

  detectDuplicateURLs(entries) {
    const urlMap = new Map();
    const duplicates = [];

    entries.forEach(entry => {
      if (urlMap.has(entry.url)) {
        duplicates.push({
          url: entry.url,
          entries: [urlMap.get(entry.url), entry.uid],
        });
      } else {
        urlMap.set(entry.url, entry.uid);
      }
    });

    return duplicates;
  }

  normalizeURL(url) {
    // Normalize URL for comparison (handle trailing slash, case, etc.)
    return url.toLowerCase().replace(/\/$/, '');
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

  // Test 1: Valid URL formats
  testValidURLs() {
    console.log('\n📝 Test 1: Valid URL Formats\n');
    const validURLs = [
      '/api',
      '/studio',
      '/api/v1',
      '/api/v1/entries',
      '/content-management-api',
      '/studio-overview-guide',
      '/admin-settings',
      '/get-started-with-cs',
    ];

    validURLs.forEach(url => {
      const result = this.validateURLFormat(url);
      this.assert(`Valid URL: ${url}`, result.valid, result.error);
    });
  }

  // Test 2: Invalid URL formats
  testInvalidURLs() {
    console.log('\n📝 Test 2: Invalid URL Formats\n');
    const invalidURLs = [
      { url: 'api', reason: 'missing leading /' },
      { url: '/studio ', reason: 'trailing space' },
      { url: '/api<script>', reason: 'angle brackets' },
      { url: '/studio"quote', reason: 'quotes' },
      { url: '/api{json}', reason: 'braces' },
      { url: '', reason: 'empty string' },
      { url: null, reason: 'null value' },
    ];

    invalidURLs.forEach(test => {
      const result = this.validateURLFormat(test.url);
      this.assert(
        `Invalid URL: ${test.url} (${test.reason})`,
        !result.valid,
        `Should be invalid but was valid`
      );
    });
  }

  // Test 3: Duplicate URL detection
  testDuplicateDetection() {
    console.log('\n📝 Test 3: Duplicate URL Detection\n');
    const entries = [
      { uid: 'entry1', url: '/api' },
      { uid: 'entry2', url: '/studio' },
      { uid: 'entry3', url: '/api' }, // duplicate
      { uid: 'entry4', url: '/guide' },
    ];

    const duplicates = this.detectDuplicateURLs(entries);
    this.assert('Detect duplicates', duplicates.length > 0, 'Should find duplicates');
    this.assert(
      'Identify duplicate URL',
      duplicates[0].url === '/api',
      `Expected /api, got ${duplicates[0].url}`
    );
    this.assert(
      'Identify both duplicate entries',
      duplicates[0].entries.includes('entry1') && duplicates[0].entries.includes('entry3'),
      'Should list both entry UIDs'
    );
  }

  // Test 4: No duplicates
  testNoDuplicates() {
    console.log('\n📝 Test 4: No Duplicates\n');
    const entries = [
      { uid: 'entry1', url: '/api' },
      { uid: 'entry2', url: '/studio' },
      { uid: 'entry3', url: '/guide' },
    ];

    const duplicates = this.detectDuplicateURLs(entries);
    this.assert('No duplicates found', duplicates.length === 0, `Found ${duplicates.length} duplicates`);
  }

  // Test 5: Case sensitivity in URLs
  testCaseSensitivity() {
    console.log('\n📝 Test 5: Case Sensitivity\n');
    const entries = [
      { uid: 'entry1', url: '/API' },
      { uid: 'entry2', url: '/api' },
      { uid: 'entry3', url: '/Api' },
    ];

    // Test if different cases are treated as different URLs
    const duplicates = this.detectDuplicateURLs(entries);
    this.assert(
      'Different cases are separate URLs (exact match)',
      duplicates.length === 0,
      'Should not match different cases'
    );

    // Test normalization for comparison
    const norm1 = this.normalizeURL('/API');
    const norm2 = this.normalizeURL('/api');
    this.assert(
      'Normalize URLs for comparison',
      norm1 === norm2,
      'Normalized URLs should match'
    );
  }

  // Test 6: Trailing slash handling
  testTrailingSlash() {
    console.log('\n📝 Test 6: Trailing Slash Handling\n');
    const entries = [
      { uid: 'entry1', url: '/api' },
      { uid: 'entry2', url: '/api/' },
      { uid: 'entry3', url: '/studio/' },
    ];

    // Exact match (should be duplicates)
    const duplicates = this.detectDuplicateURLs(entries);
    this.assert(
      'Exact match duplicates (trailing slash different)',
      duplicates.length === 0,
      'Exact match should not find /api and /api/ as duplicates'
    );

    // Normalized comparison
    const norm1 = this.normalizeURL('/api');
    const norm2 = this.normalizeURL('/api/');
    this.assert(
      'Normalize removes trailing slash',
      norm1 === norm2,
      'Normalized should be same'
    );
  }

  // Test 7: Query parameters
  testQueryParameters() {
    console.log('\n📝 Test 7: Query Parameters\n');
    const entries = [
      { uid: 'entry1', url: '/api?v=1' },
      { uid: 'entry2', url: '/api?v=2' },
      { uid: 'entry3', url: '/api' },
    ];

    const duplicates = this.detectDuplicateURLs(entries);
    this.assert(
      'Different query params are different URLs',
      duplicates.length === 0,
      'Should not match different query params'
    );
  }

  // Test 8: Hyphens and underscores
  testHyphensUnderscores() {
    console.log('\n📝 Test 8: Hyphens and Underscores\n');
    const validURLs = [
      '/content-management-api',
      '/content_management_api',
      '/studio_overview-guide',
      '/get-started-with-contentstack',
    ];

    validURLs.forEach(url => {
      const result = this.validateURLFormat(url);
      this.assert(`URL with hyphens/underscores: ${url}`, result.valid, result.error);
    });
  }

  // Test 9: Numbers in URLs
  testNumbersInURLs() {
    console.log('\n📝 Test 9: Numbers in URLs\n');
    const validURLs = [
      '/api/v1',
      '/api/v2',
      '/guide-123',
      '/section-4-overview',
    ];

    validURLs.forEach(url => {
      const result = this.validateURLFormat(url);
      this.assert(`URL with numbers: ${url}`, result.valid, result.error);
    });
  }

  // Test 10: Multiple duplicates
  testMultipleDuplicates() {
    console.log('\n📝 Test 10: Multiple Duplicates\n');
    const entries = [
      { uid: 'entry1', url: '/api' },
      { uid: 'entry2', url: '/api' },
      { uid: 'entry3', url: '/studio' },
      { uid: 'entry4', url: '/studio' },
      { uid: 'entry5', url: '/guide' },
      { uid: 'entry6', url: '/guide' },
    ];

    const duplicates = this.detectDuplicateURLs(entries);
    this.assert(
      'Detect multiple duplicate sets',
      duplicates.length >= 3,
      `Expected at least 3 duplicates, found ${duplicates.length}`
    );

    const urlsWithDuplicates = duplicates.map(d => d.url);
    this.assert('/api detected', urlsWithDuplicates.includes('/api'), 'Should find /api duplicates');
    this.assert('/studio detected', urlsWithDuplicates.includes('/studio'), 'Should find /studio duplicates');
    this.assert('/guide detected', urlsWithDuplicates.includes('/guide'), 'Should find /guide duplicates');
  }

  // Test 11: Empty URL list
  testEmptyURLList() {
    console.log('\n📝 Test 11: Empty URL List\n');
    const entries = [];
    const duplicates = this.detectDuplicateURLs(entries);

    this.assert('Empty list has no duplicates', duplicates.length === 0, 'Should return empty array');
  }

  // Test 12: Single entry
  testSingleEntry() {
    console.log('\n📝 Test 12: Single Entry\n');
    const entries = [{ uid: 'entry1', url: '/api' }];
    const duplicates = this.detectDuplicateURLs(entries);

    this.assert('Single entry has no duplicates', duplicates.length === 0, 'Should have no duplicates');
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 URL VALIDATION TEST SUMMARY\n');
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
    console.log('🧪 URL VALIDATION TESTS\n');
    this.testValidURLs();
    this.testInvalidURLs();
    this.testDuplicateDetection();
    this.testNoDuplicates();
    this.testCaseSensitivity();
    this.testTrailingSlash();
    this.testQueryParameters();
    this.testHyphensUnderscores();
    this.testNumbersInURLs();
    this.testMultipleDuplicates();
    this.testEmptyURLList();
    this.testSingleEntry();
    this.printSummary();
    process.exit(this.failed > 0 ? 1 : 0);
  }
}

new URLValidationTest().run();
