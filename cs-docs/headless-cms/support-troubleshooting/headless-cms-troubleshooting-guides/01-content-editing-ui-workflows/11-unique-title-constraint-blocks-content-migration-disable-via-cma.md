---
title: "Unique Title Constraint Blocks Content Migration - Disable via CMA"
description: "Unique Title Constraint Blocks Content Migration - Disable via CMA"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/11-unique-title-constraint-blocks-content-migration-disable-via-cma
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs89b87bcd95a38720
---

# Unique Title Constraint Blocks Content Migration - Disable via CMA

A content migration from a custom CMS fails because the target Contentstack content type enforces a unique title constraint. Source content contains duplicate titles that cannot be imported.

**Root Cause**

By default, the title field in Contentstack content types has unique=true, which prevents multiple entries from sharing the same title. The CMS UI does not expose an option to disable this uniqueness constraint. During migration, duplicate titles from the source system trigger validation failures.

**Resolution**

1.  Use the CMA to update the content type schema and set unique=false on the title field: PUT /v3/content\_types/{content\_type\_uid} with the updated schema where the title field has: { "unique": false }
2.  Re-run the migration import after applying this change.
3.  Optionally restore unique=true after the migration is complete if uniqueness should be enforced going forward.

After setting unique=false and re-running the import, confirm that entries with duplicate titles are created successfully. Restore the uniqueness constraint after migration if required.
