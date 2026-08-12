---
title: "Third-Level Nested References Not Published - Intermediate Entry Skipped"
description: "Third-Level Nested References Not Published - Intermediate Entry Skipped"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/45-third-level-nested-references-not-published-intermediate-entry-skipped
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: csce1c700d94ffb0f4
---

# Third-Level Nested References Not Published - Intermediate Entry Skipped

Publishing a parent entry with references does not publish third-level nested entries. The intermediate second-level entry is already published and skipped, which also skips its references.

**Root Cause**

‘Publish with References’ skips already-published entries. When the intermediate entry is skipped, the system does not recurse into its references, leaving third-level entries unpublished.

**Resolution**

1.  For deep nesting (3+ levels), publish from the deepest level upward: publish third-level entries first, then intermediate entries, then the top-level parent.
2.  Use a Release to group all entries at all levels for a coordinated single deployment.
3.  For automation, use the CMA bulk publish endpoint with the complete list of entry UIDs across all levels.

After publishing from the deepest level upward, verifying the parent entry resolves all reference data correctly in the CDA response.
