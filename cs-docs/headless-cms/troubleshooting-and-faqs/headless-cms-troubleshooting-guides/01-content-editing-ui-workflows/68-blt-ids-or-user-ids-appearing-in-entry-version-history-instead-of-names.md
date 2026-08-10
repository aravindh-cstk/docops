---
title: "BLT IDs or User IDs Appearing in Entry Version History Instead of Names"
description: "BLT IDs or User IDs Appearing in Entry Version History Instead of Names"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/68-blt-ids-or-user-ids-appearing-in-entry-version-history-instead-of-names
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csd64e1b9bdbd8f81e
---

# BLT IDs or User IDs Appearing in Entry Version History Instead of Names

The version history of an entry displays a BLT ID or a Contentstack user UID instead of the user’s name in the ‘Created By’ or ‘Modified By’ fields. This makes it impossible to identify who made a specific change.

**Root Cause**

This is expected behavior when the user associated with the action has been removed from the Contentstack organization. Once a user profile is deleted, the system can no longer resolve their UID to a display name. The entry retains the UID as a historical identifier but the user profile no longer exists to provide the name.

**Resolution**

This is expected platform behavior and cannot be reversed once the user has been deleted. To identify historical activity:

1.  Use the Audit Log API to retrieve action records by user UID: GET /v3/audit-logs - the response includes the user UID and action details, which can be cross-referenced with any external records of the deleted user’s UID.
2.  To prevent this issue going forward, avoid deleting user accounts from the organization while retaining entries they have modified. Instead, remove the user from stacks while preserving their organization membership if auditability is important.

The audit log retains historical records including the UID of users who are no longer active, enabling partial traceability even after account deletion.
