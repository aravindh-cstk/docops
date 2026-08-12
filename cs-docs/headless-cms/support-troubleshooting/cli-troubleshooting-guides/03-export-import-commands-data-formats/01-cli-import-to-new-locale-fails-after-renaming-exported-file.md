---
title: "CLI Import to New Locale Fails After Renaming Exported File"
description: "CLI Import to New Locale Fails After Renaming Exported File"
url: /headless-cms/support-troubleshooting/cli-troubleshooting-guides/03-export-import-commands-data-formats/01-cli-import-to-new-locale-fails-after-renaming-exported-file
doc_type: faq
_cms_section_uid: csfc06f8b79b93b694
_cms_faq_uid: cs3af3d707299c3281
---

# CLI Import to New Locale Fails After Renaming Exported File

The customer wanted to import content into a new language (locale) and thought that simply renaming the exported content files would change their locale. However, after renaming the files, the import process failed. The customer asked for help to import content correctly into the intended new locale.

**Root Cause**

In this case, support observed an **incorrect locale identifier** (or mismatch with the stack’s configured locales) during the import workflow. Renaming files alone does not retarget locale. The failure was tied to locale configuration/format as used in the workflow, not necessarily a generic CLI defect.

**Resolution**

1.  Review the locale identifier the customer is using in the export/import workflow.
2.  Correct the locale format to match the stack’s configured locale format (the exact format used in the stack configuration).
3.  Re-run the import using the corrected locale format, following the same steps the customer was attempting.

The CLI import completes successfully after correcting the locale format, and the content is imported into the intended locale without error.
