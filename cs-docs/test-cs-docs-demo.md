---
title: Test CS Docs Demo
description: Test documentation entry verifying Git to Sandbox sync workflow (TC-002) with correct content type mapping and field synchronization for docs_article.
url: /administration/test-cs-docs-demo
doc_type: guide
marker: Testing
heading: CS-Docs Demo Entry
version: 1.0
---

# Test CS Docs Demo

This is a test documentation entry created to verify the Git → Sandbox sync workflow (TC-002). The entry should be created in Sandbox CMS with content type `docs_article`.

## Overview

This test demonstrates the complete documentation sync flow from Git to Contentstack Sandbox environment.

**Test Details:**
- Created: 2026-08-10
- Stack: CS-Docs (Sandbox)
- Expected Result: Entry created in Sandbox with correct content type (docs_article)
- URL: /administration/test-cs-docs-demo

## Verification Checklist

- ✅ YAML frontmatter parsing (title, url, doc_type)
- ✅ Content type mapping (guide → docs_article)
- ✅ Field sync (title, url, body markdown)
- ✅ URL normalization (relative paths)
- ✅ Entry created as Draft in Sandbox (not published)

## Next Steps

After verification:
1. Review content in Sandbox CMS
2. Publish to `development` environment
3. Promote to Production Staging
4. Final review and promote to Production
