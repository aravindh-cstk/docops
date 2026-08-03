#!/usr/bin/env node

/**
 * Unit Test: Field-Level Entry Merge
 * Tests safe field merging to prevent data loss
 */

class FieldMergeTest {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.tests = [];
  }

  mergeEntryFields(existingEntry, newFields) {
    // Merge new fields into existing entry, preserving unchanged fields
    const merged = { ...existingEntry };

    Object.keys(newFields).forEach(key => {
      const newValue = newFields[key];
      const existingValue = existingEntry[key];

      // Only update if value actually changed
      if (newValue !== existingValue) {
        merged[key] = newValue;
      }
    });

    return merged;
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

  // Test 1: All fields updated
  testAllFieldsUpdated() {
    console.log('\n📝 Test 1: All Fields Updated\n');
    const existing = {
      uid: 'entry1',
      title: 'Old Title',
      description: 'Old Description',
      body: 'Old Body',
    };

    const newFields = {
      title: 'New Title',
      description: 'New Description',
      body: 'New Body',
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('Title updated', merged.title === 'New Title', `Got: ${merged.title}`);
    this.assert('Description updated', merged.description === 'New Description', `Got: ${merged.description}`);
    this.assert('Body updated', merged.body === 'New Body', `Got: ${merged.body}`);
    this.assert('UID preserved', merged.uid === 'entry1', 'UID should not change');
  }

  // Test 2: Partial fields updated
  testPartialFieldsUpdated() {
    console.log('\n📝 Test 2: Partial Fields Updated\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      description: 'Original Description',
      url: 'test-entry',
      published: false,
    };

    const newFields = {
      title: 'Updated Title',
      url: 'test-entry', // same, no change
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('Title updated', merged.title === 'Updated Title', `Got: ${merged.title}`);
    this.assert('URL unchanged', merged.url === 'test-entry', 'URL should stay same');
    this.assert('Description preserved', merged.description === 'Original Description', 'Original field lost!');
    this.assert('Published preserved', merged.published === false, 'Published state lost!');
  }

  // Test 3: New fields added
  testNewFieldsAdded() {
    console.log('\n📝 Test 3: New Fields Added\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      description: 'Description',
    };

    const newFields = {
      title: 'Title', // unchanged
      custom_field: 'Custom Value',
      product: 'Contentstack',
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('Original fields preserved', merged.title === 'Title', 'Title lost');
    this.assert('New field added', merged.custom_field === 'Custom Value', 'Custom field not added');
    this.assert('Product added', merged.product === 'Contentstack', 'Product not added');
  }

  // Test 4: No changes (idempotent)
  testNoChanges() {
    console.log('\n📝 Test 4: No Changes (Idempotent)\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      description: 'Description',
      url: 'test',
    };

    const newFields = {
      title: 'Title',
      description: 'Description',
      url: 'test',
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('All fields same',
      JSON.stringify(merged) === JSON.stringify(existing),
      'Should be identical when no changes'
    );
  }

  // Test 5: Null and undefined handling
  testNullUndefinedHandling() {
    console.log('\n📝 Test 5: Null/Undefined Handling\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      description: 'Description',
      optional_field: 'Value',
    };

    const newFields = {
      title: 'Title', // no change
      optional_field: null, // setting to null
      new_field: undefined, // undefined value
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('Description preserved', merged.description === 'Description', 'Description lost');
    this.assert('Null sets field to null', merged.optional_field === null, 'Null not applied');
    this.assert('Undefined added as undefined', merged.new_field === undefined, 'Undefined not added');
  }

  // Test 6: Array fields preserved
  testArrayFieldsPreserved() {
    console.log('\n📝 Test 6: Array Fields Preserved\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      tags: ['tag1', 'tag2'],
      references: [{ uid: 'ref1' }, { uid: 'ref2' }],
    };

    const newFields = {
      title: 'Updated Title',
      tags: ['tag1', 'tag2'], // same
      references: [{ uid: 'ref1' }, { uid: 'ref2' }], // same
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('Arrays preserved',
      JSON.stringify(merged.tags) === JSON.stringify(existing.tags),
      'Array modified'
    );
    this.assert('Reference arrays preserved',
      JSON.stringify(merged.references) === JSON.stringify(existing.references),
      'References modified'
    );
  }

  // Test 7: Nested objects preserved
  testNestedObjectsPreserved() {
    console.log('\n📝 Test 7: Nested Objects Preserved\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      metadata: {
        author: 'John',
        created: '2024-01-01',
        tags: ['tag1'],
      },
      settings: {
        published: true,
        visibility: 'public',
      },
    };

    const newFields = {
      title: 'Updated Title',
      metadata: {
        author: 'John',
        created: '2024-01-01',
        tags: ['tag1'],
      }, // same
      settings: {
        published: false, // changed
        visibility: 'public',
      },
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('Title updated', merged.title === 'Updated Title', 'Title not updated');
    this.assert('Metadata object preserved',
      JSON.stringify(merged.metadata) === JSON.stringify(existing.metadata),
      'Metadata should not change'
    );
    // Settings object changed, so it will be replaced entirely
    this.assert('Settings updated',
      merged.settings.published === false,
      'Published setting should be false'
    );
  }

  // Test 8: Empty string handling
  testEmptyStringHandling() {
    console.log('\n📝 Test 8: Empty String Handling\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      description: 'Original Description',
    };

    const newFields = {
      title: 'Title', // no change
      description: '', // empty string (change)
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('Title unchanged', merged.title === 'Title', 'Title changed');
    this.assert('Description set to empty', merged.description === '', `Got: "${merged.description}"`);
  }

  // Test 9: Number field changes
  testNumberFieldChanges() {
    console.log('\n📝 Test 9: Number Field Changes\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      count: 5,
      rating: 4.5,
    };

    const newFields = {
      title: 'Title', // no change
      count: 10, // changed
      rating: 4.5, // no change
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('Title preserved', merged.title === 'Title', 'Title changed');
    this.assert('Count updated', merged.count === 10, `Got: ${merged.count}`);
    this.assert('Rating unchanged', merged.rating === 4.5, `Got: ${merged.rating}`);
  }

  // Test 10: Boolean field changes
  testBooleanFieldChanges() {
    console.log('\n📝 Test 10: Boolean Field Changes\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      published: true,
      featured: false,
    };

    const newFields = {
      title: 'Title', // no change
      published: false, // changed
      featured: false, // no change
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('Title preserved', merged.title === 'Title', 'Title changed');
    this.assert('Published changed', merged.published === false, `Got: ${merged.published}`);
    this.assert('Featured unchanged', merged.featured === false, 'Featured should not change');
  }

  // Test 11: Large entry merge
  testLargeEntryMerge() {
    console.log('\n📝 Test 11: Large Entry Merge\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      description: 'Description',
      body: 'Body content ' + 'x'.repeat(1000),
      author: 'Author',
      published: true,
      tags: ['tag1', 'tag2', 'tag3'],
      metadata: { key1: 'value1', key2: 'value2' },
      created_at: '2024-01-01',
      updated_at: '2024-01-02',
      custom1: 'value1',
      custom2: 'value2',
      custom3: 'value3',
    };

    const newFields = {
      title: 'Updated Title',
      body: 'Body content ' + 'x'.repeat(1000), // same
      tags: ['tag1', 'tag2', 'tag3'], // same
      custom2: 'updated_value2',
    };

    const merged = this.mergeEntryFields(existing, newFields);

    this.assert('Title updated', merged.title === 'Updated Title', 'Title not updated');
    this.assert('Body preserved', merged.body === existing.body, 'Body lost');
    this.assert('Author preserved', merged.author === 'Author', 'Author lost');
    this.assert('Custom field updated', merged.custom2 === 'updated_value2', 'Custom2 not updated');
    this.assert('Custom1 preserved', merged.custom1 === 'value1', 'Custom1 lost');
    this.assert('Custom3 preserved', merged.custom3 === 'value3', 'Custom3 lost');
  }

  // Test 12: Data integrity check
  testDataIntegrityCheck() {
    console.log('\n📝 Test 12: Data Integrity Check\n');
    const existing = {
      uid: 'entry1',
      title: 'Title',
      description: 'Important Description',
      sensitive_data: 'SECRET',
      status: 'published',
    };

    const newFields = {
      title: 'Updated Title',
      // Note: sensitive_data NOT in newFields
      // Note: status NOT in newFields
    };

    const merged = this.mergeEntryFields(existing, newFields);

    // Verify no data loss
    this.assert('UID preserved', merged.uid === 'entry1', 'UID lost');
    this.assert('Description NOT lost', merged.description === 'Important Description', 'Description lost!');
    this.assert('Sensitive data NOT lost', merged.sensitive_data === 'SECRET', 'Sensitive data lost!');
    this.assert('Status NOT lost', merged.status === 'published', 'Status lost!');
    this.assert('Title updated', merged.title === 'Updated Title', 'Title not updated');
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 FIELD MERGE TEST SUMMARY\n');
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
    console.log('🧪 FIELD-LEVEL ENTRY MERGE TESTS\n');
    this.testAllFieldsUpdated();
    this.testPartialFieldsUpdated();
    this.testNewFieldsAdded();
    this.testNoChanges();
    this.testNullUndefinedHandling();
    this.testArrayFieldsPreserved();
    this.testNestedObjectsPreserved();
    this.testEmptyStringHandling();
    this.testNumberFieldChanges();
    this.testBooleanFieldChanges();
    this.testLargeEntryMerge();
    this.testDataIntegrityCheck();
    this.printSummary();
    process.exit(this.failed > 0 ? 1 : 0);
  }
}

new FieldMergeTest().run();
