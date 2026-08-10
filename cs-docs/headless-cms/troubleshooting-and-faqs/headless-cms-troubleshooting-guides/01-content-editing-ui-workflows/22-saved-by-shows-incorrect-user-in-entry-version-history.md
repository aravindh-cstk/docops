---
title: "‘Saved By’ Shows Incorrect User in Entry Version History"
description: "‘Saved By’ Shows Incorrect User in Entry Version History"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/22-saved-by-shows-incorrect-user-in-entry-version-history
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs9005f64aa2a1ef56
---

# ‘Saved By’ Shows Incorrect User in Entry Version History

The ‘Saved By’ field in an entry’s version history displays a user who is not the person expected to have made the change. Editors report seeing unexpected names or user IDs in the version history.

**Root Cause**

The ‘Saved By’ field reflects the user who saved the entry version, not the user who published it. If an entry is saved by one user and later published by another, the version history shows the saver’s identity - not the publisher’s. Additionally, automated processes (API calls, CLI operations, or automation scripts) that save entries will show their associated user identity or service account.

**Resolution**

1.  Distinguish between the saver and the publisher: ‘Saved By’ in version history = the user who saved that version; the publishing record in the audit log = the user who triggered the publish.
2.  To identify the user behind a specific updated\_by UID shown in version history, call the Users API: GET /v3/users/{user\_uid} (requires a management token).
3.  Review the Audit Log (Settings > Audit Log) for the entry to see both save and publish events with their associated users and timestamps.
4.  For discrepancies caused by automated processes, review which service accounts or automation configurations have write access to the affected entries.

After cross-referencing the updated\_by UID with the Users API, confirm the identity of the user who saved the version and whether the change was manual or automated.
