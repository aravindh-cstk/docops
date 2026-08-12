---
title: "Restoring Deleted Entries via CMA Script"
description: "Restoring Deleted Entries via CMA Script"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/13-restoring-deleted-entries-via-cma-script
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs10d3fd1850cbebeb
---

# Restoring Deleted Entries via CMA Script

Entries have been accidentally deleted from a stack. The customer needs to restore them and wants to know whether deleted entries can be published after restoration.

**Root Cause**

Contentstack does not provide a native UI-based entry restoration feature. Deleted entries can be recovered by recreating them via the CMA using data from a backup or audit log. Once recreated, they are new entries and publish normally through the standard workflow.

**Resolution**

1.  Retrieve the entry data from a backup source (for example, a previously exported JSON file, a staging stack, or a source-of-truth external system).
2.  Use the CMA Create Entry endpoint (POST /v3/content\_types/{uid}/entries) to recreate each deleted entry with the original content.
3.  If the original entry UID must be preserved, include the uid field in the create payload.
4.  After recreating the entries, publish them through the standard publish workflow.

After recreating the entries and publishing them, verify they appear correctly in the target environment via the CDA.
