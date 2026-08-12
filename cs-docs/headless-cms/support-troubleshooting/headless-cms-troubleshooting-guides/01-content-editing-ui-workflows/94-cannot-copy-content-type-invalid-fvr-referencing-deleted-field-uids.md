---
title: "Cannot Copy Content Type - Invalid FVR Referencing Deleted Field UIDs"
description: "Cannot Copy Content Type - Invalid FVR Referencing Deleted Field UIDs"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/94-cannot-copy-content-type-invalid-fvr-referencing-deleted-field-uids
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs4f702d479addf384
---

# Cannot Copy Content Type - Invalid FVR Referencing Deleted Field UIDs

Duplicating a content type fails with an error. The content type appears to have correctly configured fields, and manual inspection does not immediately reveal the problem.

**Root Cause**

The content type has Field Visibility Rules (FVR) - either directly or inherited via a Global Field - that reference field UIDs or dropdown values that no longer exist. When the content type was modified (fields deleted or renamed, or dropdown options changed), the FVR configurations were not updated to match. The duplication process validates the full schema including FVR targets, and encounters references to non-existent fields.

**Resolution**

1.  Navigate to the content type in the Content Type Builder and open the Field Visibility Rules for each field.
2.  Look for any rule that references a field UID that no longer exists in the schema (these may appear as empty dropdowns or ‘undefined’ values).
3.  If the FVR is on a field inside a Global Field, open the Global Field and review its FVR configurations - fixing the rule in the Global Field propagates the fix to all content types using it.
4.  Update each invalid FVR to use valid, existing field UIDs and dropdown values.
5.  Save the content type (or Global Field) and retry the duplication.

After updating the FVR to reference only currently existing fields and values, retry duplicating the content type and confirm it completes successfully.
