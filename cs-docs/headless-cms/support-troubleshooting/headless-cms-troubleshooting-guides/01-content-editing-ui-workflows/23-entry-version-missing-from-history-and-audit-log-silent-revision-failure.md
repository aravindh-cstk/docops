---
title: "Entry Version Missing From History and Audit Log - Silent Revision Failure"
description: "Entry Version Missing From History and Audit Log - Silent Revision Failure"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/23-entry-version-missing-from-history-and-audit-log-silent-revision-failure
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs6ff2cf6163442369
---

# Entry Version Missing From History and Audit Log - Silent Revision Failure

A specific version of an entry (for example, version v4) is confirmed to have been published to production, but it does not appear in the version history dropdown or in the audit log. The version appears to have been deleted or never created.

**Root Cause**

Investigation confirmed the version was successfully created and published to production. However, due to a silent failure at the time of creation, the version was not recorded in the revisions collection - the internal store that powers version history and audit log display. The version existed and functioned correctly in live content. The absence from version history and audit logs is caused by the revision record never being written, not by any deletion action.

**Resolution**

1.  Contact Contentstack Support and provide the entry UID, the missing version number, and the stack API key. Engineering can inspect the revisions collection to confirm whether the version record exists.
2.  Do not attempt to recreate or overwrite the missing version - the live content is correct. The issue is limited to the history display layer.
3.  If the missing version is needed for audit or compliance purposes, Engineering can provide a backend confirmation that the version was created and published at the reported time.

After Engineering investigates, confirm whether the revision record can be restored to the history view, or accept the Engineering-provided confirmation as the audit record for the missing version.
