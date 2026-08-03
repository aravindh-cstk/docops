#!/usr/bin/env node

/**
 * Unit Test: Content Type Mapping
 * Tests folder to content type mapping and validation
 */

class ContentTypeMappingTest {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.tests = [];
  }

  // CS-Docs mappings
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

  FOLDER_TO_CONTENT_TYPE = {
    'administration': 'docs_article',
    'agent-os': 'docs_article',
    'analytics': 'docs_article',
    'assets': 'docs_article',
    'content-managers': 'docs_article',
    'data-and-insights': 'docs_article',
    'get-started': 'docs_article',
    'headless-cms': 'docs_article',
    'launch': 'docs_article',
    'marketplace': 'docs_article',
    'overview': 'docs_article',
    'personalize': 'docs_article',
    'developers': 'docs_article',
    'studio': 'docs_article',
  };

  // API-Docs mappings
  FOLDER_TO_CONTENT_TYPE_APIDOCS = {
    'cma-api-requests': 'api_requests_cma',
    'cda-api-requests': 'api_requests_cda',
    'graphql-api-requests': 'api_requests_graphql',
    'apps-api-requests': 'api_requests_apps',
    'analytics-api-requests': 'api_requests_analytics',
    'administration-api-requests': 'api_requests_administration',
    'ai-platform-api-requests': 'api_requests_ai_platform',
    'asset-management-api-requests': 'api_requests_asset_management_api',
    'automation-hub-api-requests': 'api_requests_automation_hub',
    'brand-kit-api-requests': 'api_requests_brand_kit',
    'genai-ingest-api-requests': 'api_requests_genai_api_and_ingest_api',
    'generative-api-requests': 'api_requests_generative_api',
    'image-api-requests': 'api_requests_image',
    'knowledge-vault-api-requests': 'api_requests_knowlegde_vault',
    'scim-api-requests': 'api_requests_scim',
  };

  mapFolderToContentType(folder, isApiDocs = false) {
    const mapping = isApiDocs ? this.FOLDER_TO_CONTENT_TYPE_APIDOCS : this.FOLDER_TO_CONTENT_TYPE;
    return mapping[folder] || null;
  }

  extractFolder(filePath) {
    // Extract folder from path like: cs-docs/studio/about-studio.md
    const parts = filePath.split('/');
    if (parts.length >= 2) {
      return parts[1]; // cs-docs/[FOLDER]/file.md
    }
    return null;
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

  // Test 1: Valid CS-Docs folder mappings
  testValidCsDocsMappings() {
    console.log('\n📝 Test 1: Valid CS-Docs Folder Mappings\n');
    const folders = [
      'administration',
      'agent-os',
      'analytics',
      'assets',
      'content-managers',
      'data-and-insights',
      'get-started',
      'headless-cms',
      'launch',
      'marketplace',
      'overview',
      'personalize',
      'developers',
      'studio',
    ];

    folders.forEach(folder => {
      const contentType = this.mapFolderToContentType(folder, false);
      this.assert(
        `Map folder: ${folder}`,
        contentType === 'docs_article',
        `Expected docs_article, got ${contentType}`
      );
    });
  }

  // Test 2: Valid API-Docs folder mappings
  testValidApiDocsMappings() {
    console.log('\n📝 Test 2: Valid API-Docs Folder Mappings\n');
    const testCases = [
      { folder: 'cma-api-requests', expected: 'api_requests_cma' },
      { folder: 'cda-api-requests', expected: 'api_requests_cda' },
      { folder: 'graphql-api-requests', expected: 'api_requests_graphql' },
      { folder: 'apps-api-requests', expected: 'api_requests_apps' },
    ];

    testCases.forEach(test => {
      const contentType = this.mapFolderToContentType(test.folder, true);
      this.assert(
        `Map API folder: ${test.folder}`,
        contentType === test.expected,
        `Expected ${test.expected}, got ${contentType}`
      );
    });
  }

  // Test 3: Invalid folder returns null
  testInvalidFolder() {
    console.log('\n📝 Test 3: Invalid Folder Returns Null\n');
    const invalidFolders = [
      'unknown-folder',
      'invalid',
      'products',
      'docs',
      '',
    ];

    invalidFolders.forEach(folder => {
      const contentType = this.mapFolderToContentType(folder, false);
      this.assert(
        `Invalid folder: ${folder}`,
        contentType === null,
        `Expected null, got ${contentType}`
      );
    });
  }

  // Test 4: Extract folder from file path
  testExtractFolder() {
    console.log('\n📝 Test 4: Extract Folder from File Path\n');
    const testCases = [
      { path: 'cs-docs/studio/about-studio.md', expected: 'studio' },
      { path: 'cs-docs/administration/admin-guide.md', expected: 'administration' },
      { path: 'api-docs/cma-api-requests/create-entry.md', expected: 'cma-api-requests' },
      { path: 'api-docs/graphql-api-requests/query-guide.md', expected: 'graphql-api-requests' },
    ];

    testCases.forEach(test => {
      const folder = this.extractFolder(test.path);
      this.assert(
        `Extract folder from: ${test.path}`,
        folder === test.expected,
        `Expected ${test.expected}, got ${folder}`
      );
    });
  }

  // Test 5: Nested folder paths
  testNestedFolders() {
    console.log('\n📝 Test 5: Nested Folder Paths\n');
    const testCases = [
      { path: 'cs-docs/studio/guides/advanced.md', expected: 'studio' },
      { path: 'api-docs/cma-api-requests/entries/create.md', expected: 'cma-api-requests' },
    ];

    testCases.forEach(test => {
      const folder = this.extractFolder(test.path);
      this.assert(
        `Extract from nested: ${test.path}`,
        folder === test.expected,
        `Expected ${test.expected}, got ${folder}`
      );
    });
  }

  // Test 6: Case sensitivity in folders
  testCaseSensitivity() {
    console.log('\n📝 Test 6: Case Sensitivity\n');
    const testCases = [
      { folder: 'Studio', expected: null }, // wrong case
      { folder: 'studio', expected: 'docs_article' }, // correct case
      { folder: 'STUDIO', expected: null }, // wrong case
      { folder: 'Administration', expected: null }, // wrong case
      { folder: 'administration', expected: 'docs_article' }, // correct case
    ];

    testCases.forEach(test => {
      const contentType = this.mapFolderToContentType(test.folder, false);
      this.assert(
        `Case sensitivity: ${test.folder}`,
        contentType === test.expected,
        `Expected ${test.expected}, got ${contentType}`
      );
    });
  }

  // Test 7: Hyphens vs underscores
  testHyphensVsUnderscores() {
    console.log('\n📝 Test 7: Hyphens vs Underscores\n');
    const testCases = [
      { folder: 'agent-os', expected: 'docs_article' }, // correct
      { folder: 'agent_os', expected: null }, // underscore (wrong)
      { folder: 'data-and-insights', expected: 'docs_article' }, // correct
      { folder: 'data_and_insights', expected: null }, // underscore (wrong)
    ];

    testCases.forEach(test => {
      const contentType = this.mapFolderToContentType(test.folder, false);
      this.assert(
        `Hyphens vs underscores: ${test.folder}`,
        contentType === test.expected,
        `Expected ${test.expected}, got ${contentType}`
      );
    });
  }

  // Test 8: All CS-Docs folders present
  testAllCsDocsFolders() {
    console.log('\n📝 Test 8: All CS-Docs Folders Mapped\n');
    const folders = Object.values(this.TITLE_PREFIX_TO_FOLDER);
    const uniqueFolders = [...new Set(folders)];

    uniqueFolders.forEach(folder => {
      const contentType = this.mapFolderToContentType(folder, false);
      this.assert(
        `All folders mapped: ${folder}`,
        contentType !== null,
        `Folder ${folder} not mapped`
      );
    });
  }

  // Test 9: All API-Docs folders present
  testAllApiDocsFolders() {
    console.log('\n📝 Test 9: All API-Docs Folders Mapped\n');
    const folders = Object.keys(this.FOLDER_TO_CONTENT_TYPE_APIDOCS);

    folders.forEach(folder => {
      const contentType = this.mapFolderToContentType(folder, true);
      this.assert(
        `All API folders mapped: ${folder}`,
        contentType !== null,
        `Folder ${folder} not mapped`
      );
    });
  }

  // Test 10: Content type uniqueness in CS-Docs
  testCsDocsContentTypeUniqueness() {
    console.log('\n📝 Test 10: CS-Docs Content Type Uniqueness\n');
    const contentTypes = Object.values(this.FOLDER_TO_CONTENT_TYPE);
    const uniqueContentTypes = new Set(contentTypes);

    this.assert(
      'All CS-Docs map to same content type',
      uniqueContentTypes.size === 1,
      `Expected 1 unique type, got ${uniqueContentTypes.size}`
    );

    this.assert(
      'CS-Docs use docs_article',
      contentTypes[0] === 'docs_article',
      `Expected docs_article, got ${contentTypes[0]}`
    );
  }

  // Test 11: Content type uniqueness in API-Docs
  testApiDocsContentTypeUniqueness() {
    console.log('\n📝 Test 11: API-Docs Content Type Uniqueness\n');
    const contentTypes = Object.values(this.FOLDER_TO_CONTENT_TYPE_APIDOCS);
    const uniqueContentTypes = new Set(contentTypes);

    this.assert(
      'API-Docs have multiple content types',
      uniqueContentTypes.size > 1,
      `Expected multiple types, got ${uniqueContentTypes.size}`
    );

    this.assert(
      'API-Docs use api_requests_* format',
      Array.from(uniqueContentTypes).every(ct => ct.startsWith('api_requests_')),
      'All API content types should start with api_requests_'
    );
  }

  // Test 12: Missing/extra mappings
  testMappingCompleteness() {
    console.log('\n📝 Test 12: Mapping Completeness\n');
    const folders = Object.keys(this.FOLDER_TO_CONTENT_TYPE);
    const contentTypes = Object.values(this.FOLDER_TO_CONTENT_TYPE);

    this.assert(
      'No null mappings in CS-Docs',
      !contentTypes.includes(null),
      'Should not have null mappings'
    );

    this.assert(
      'All folders have mappings',
      folders.length === 14,
      `Expected 14 folders, got ${folders.length}`
    );
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 CONTENT TYPE MAPPING TEST SUMMARY\n');
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
    console.log('🧪 CONTENT TYPE MAPPING TESTS\n');
    this.testValidCsDocsMappings();
    this.testValidApiDocsMappings();
    this.testInvalidFolder();
    this.testExtractFolder();
    this.testNestedFolders();
    this.testCaseSensitivity();
    this.testHyphensVsUnderscores();
    this.testAllCsDocsFolders();
    this.testAllApiDocsFolders();
    this.testCsDocsContentTypeUniqueness();
    this.testApiDocsContentTypeUniqueness();
    this.testMappingCompleteness();
    this.printSummary();
    process.exit(this.failed > 0 ? 1 : 0);
  }
}

new ContentTypeMappingTest().run();
