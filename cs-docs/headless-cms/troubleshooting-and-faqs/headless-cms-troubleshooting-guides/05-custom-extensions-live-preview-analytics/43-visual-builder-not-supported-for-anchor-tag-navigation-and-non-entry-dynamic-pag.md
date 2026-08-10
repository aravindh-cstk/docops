---
title: "Visual Builder Not Supported for Anchor-Tag Navigation and Non-Entry Dynamic Pages"
description: "Visual Builder Not Supported for Anchor-Tag Navigation and Non-Entry Dynamic Pages"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/43-visual-builder-not-supported-for-anchor-tag-navigation-and-non-entry-dynamic-pag
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs16e6d0e25f24c0f0
---

# Visual Builder Not Supported for Anchor-Tag Navigation and Non-Entry Dynamic Pages

Visual Builder / Live Preview does not work correctly for pages that use anchor tag-based navigation (#section links) or for dynamically generated pages that do not exist as standalone entries in Contentstack (for example, pages rendered from a template entry with data populated from external integrations).

**Root Cause**

Visual Builder is designed to edit content entries that exist as standalone entries in Contentstack. Two unsupported scenarios: (1) anchor tag navigation - Visual Builder does not support in-page scroll navigation via hash (#) URLs; the LP session uses the base URL and cannot track anchor positions. (2) Non-entry dynamic pages - pages rendered programmatically from templates using external data sources (CVent, APIs, etc.) do not have a corresponding Contentstack entry for Visual Builder to edit.

**Resolution**

These are known platform limitations for Visual Builder:

1.  For anchor-tag navigation pages: use the standard entry editor to make content changes, then verify the result on the published page. Visual Builder cannot navigate to specific anchor sections.
2.  For dynamic template pages without standalone entries: consider restructuring so each unique page has its own entry in Contentstack. If this is not feasible, use the entry editor for template content changes and preview using the standard delivery URL.
3.  Contact Contentstack Support to register interest in anchor navigation support and non-entry page support for Visual Builder - these are tracked for future roadmap consideration.

After understanding the limitations, confirm the editorial team uses the appropriate authoring surface (Visual Builder for standalone entry pages, entry editor for anchor-nav and dynamic template pages).
