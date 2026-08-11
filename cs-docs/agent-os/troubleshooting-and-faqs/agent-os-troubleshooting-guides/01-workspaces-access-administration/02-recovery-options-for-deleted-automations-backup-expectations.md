---
title: "Recovery Options for Deleted Automations / Backup Expectations"
description: "Recovery Options for Deleted Automations / Backup Expectations"
url: /agent-os/troubleshooting-and-faqs/agent-os-troubleshooting-guides/01-workspaces-access-administration/02-recovery-options-for-deleted-automations-backup-expectations
doc_type: faq
_cms_section_uid: cs88fdd58dfb5bf7c8
_cms_faq_uid: csf9227a0544f5a6b0
---

# Recovery Options for Deleted Automations / Backup Expectations

Customers may ask how to recover deleted automations and whether configuration backups exist.

**Root Cause** Deleted automation configurations are not recoverable from within the UI; restoration is not supported unless disaster recovery is involved.

**Resolution**

1.  Confirm automation deletion scope (which project, when deleted).
2.  Recommend rebuilding from documentation/export (if export exists).
3.  If business-critical, initiate DR requests through the internal database team (process-dependent).
4.  Recommend governance controls:

-   Export automations periodically
-   Maintain versioned configuration repo

Automation is recreated successfully (or restored via approved DR process).
