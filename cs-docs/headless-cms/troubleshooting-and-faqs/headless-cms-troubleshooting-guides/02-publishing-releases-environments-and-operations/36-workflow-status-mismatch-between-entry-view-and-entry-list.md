---
title: "Workflow Status Mismatch Between Entry View and Entry List"
description: "Workflow Status Mismatch Between Entry View and Entry List"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/36-workflow-status-mismatch-between-entry-view-and-entry-list
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs48cde318eae2b39f
---

# Workflow Status Mismatch Between Entry View and Entry List

An entry shows a status of ‘Approved’ when opened individually in the editor and across all locales, but the entry list still shows it as ‘Review’. The discrepancy causes confusion about whether the entry is ready to publish.

**Root Cause**

The entry list UI may not immediately reflect localized workflow stage updates. The backend workflow state is correctly updated, and publishing will proceed without issues based on the actual workflow state - not the stale list view.

**Resolution**

This is a known UI refresh lag in the entry list. To resolve:

1.  Refresh the entry list page to force the UI to reload the latest workflow states.
2.  Publishing can proceed safely - the backend workflow state (visible in the entry editor) is the authoritative state.

After refreshing the entry list, confirm the workflow status shown matches the status visible within the entry editor.
