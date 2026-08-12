---
title: "Bulk Publish and Unpublish Failing With ‘Invalid Entry’ Error"
description: "Bulk Publish and Unpublish Failing With ‘Invalid Entry’ Error"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/31-bulk-publish-and-unpublish-failing-with-invalid-entry-error
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs062a928c7e502e85
---

# Bulk Publish and Unpublish Failing With ‘Invalid Entry’ Error

Bulk publish and unpublish operations fail with an ‘Invalid entry’ error, despite the entries being valid when published individually. The bulk job log shows ‘Untitled’ entries in the failure list. Individually publishing the same entries succeeds.

**Root Cause**

This was a platform-level bug in the new publishing flow. The bulk publish/unpublish path was failing to correctly resolve entry versions during the validation step, causing valid entries to be flagged as invalid. The ‘Untitled’ display in the job log was a consequence of the entry resolution failure, not an indication that the entries were actually untitled or invalid.

**Resolution**

A platform fix has been deployed. No configuration change is required.

1.  After the fix deployment, retry the bulk publish or unpublish operation that was previously failing.
2.  If the ‘Invalid entry’ error persists after the fix is confirmed deployed, contact Contentstack Support with the affected entry UIDs, the stack API key, and the bulk job ID from the failed operation.

After the fix, confirm that bulk publish and unpublish operations complete successfully for the previously failing entries.
