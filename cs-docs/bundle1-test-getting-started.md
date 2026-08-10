---
title: Bundle1 Test Getting Started
description: Bundle 1 demo guide verifying Git to Sandbox sync with content type mapping and field synchronization across CMS environments.
url: /studio/bundle1-test-getting-started
doc_type: guide
version: 1.0
---

# Bundle1 Test Getting Started

This documentation guide tests the complete Git → Sandbox sync workflow for Bundle 1 (TC-042, TC-002, TC-007, TC-010, TC-011, TC-019).

## Overview

Bundle 1 testing validates:
- YAML frontmatter parsing with complex fields
- Content type mapping (guide → docs_article)
- Field synchronization (title, URL, body markdown)
- Environment variable handling
- Entry creation and update operations

## Test Scenarios

### TC-042: PR Merge to Main Triggers Sync

When you push files to main branch:
1. GitHub Actions workflow triggers automatically
2. `gh-to-sandbox-sync-csdocs.yml` workflow runs
3. Entries created as DRAFT in Sandbox CMS

### TC-002: Create New CS Doc Entry

Expected result after sync:
- Entry created in Sandbox with title: "Bundle1 Test Getting Started"
- Content type: `docs_article`
- URL: `/studio/bundle1-test-getting-started`
- Status: DRAFT (not published)

### TC-007: CS Doc Type Mapping

Content type mapping verification:
- Frontmatter `doc_type: guide`
- Maps to Contentstack content type: `docs_article`
- Correct schema fields populated

### TC-010 & TC-011: Field Sync Verification

Field mapping tests:
- **Title**: "Bundle1 Test Getting Started" → docs_article.title
- **URL**: "/studio/bundle1-test-getting-started" → docs_article.url
- **Body**: Full markdown content → docs_article.body/article_content

## Verification Steps

1. **Check Sandbox CMS**
   - Navigate to Stack > Content Type: docs_article
   - Search for Bundle1 Test Getting Started
   - Verify all fields populated correctly

2. **Verify Entry Status**
   - Status should be Draft
   - Not published to any environment yet

3. **Confirm No Duplicates**
   - Check URL uniqueness at /studio/bundle1-test-getting-started
   - Should appear exactly once in Sandbox

## Next Steps (Bundle 3)

After verification in Sandbox:
1. Publish entry to `development` environment (TC-013)
2. Verify publish_details array structure (TC-014)
3. Proceed to Sandbox → Production promotion (TC-015, TC-057)
