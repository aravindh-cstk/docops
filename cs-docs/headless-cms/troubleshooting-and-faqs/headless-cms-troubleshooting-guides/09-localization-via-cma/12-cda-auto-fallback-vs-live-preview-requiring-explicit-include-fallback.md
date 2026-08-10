---
title: "CDA Auto-Fallback vs Live Preview Requiring Explicit include_fallback"
description: "CDA Auto-Fallback vs Live Preview Requiring Explicit include_fallback"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/12-cda-auto-fallback-vs-live-preview-requiring-explicit-include-fallback
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs348183f642271d25
---

# CDA Auto-Fallback vs Live Preview Requiring Explicit include_fallback

CDA queries for unlocalized but published entries correctly return content in the en-us locale. However, the same entry appears empty in Live Preview and Timeline mode when the en-us locale is queried without include\_fallback=true.

**Root Cause**

The CDA and Live Preview/Timeline apply fallback logic differently. The CDA assumes that published entries should return content and automatically falls back to the master locale when a localized version does not exist for the requested locale. Live Preview and Timeline do not apply this automatic fallback - they return empty results if localized content does not exist for the requested locale unless include\_fallback=true is explicitly provided in the request.

**Resolution**

1.  Always include include\_fallback=true in Live Preview and Timeline API requests when content may not be localized for every available locale.
2.  Alternatively, create explicit locale versions of entries for all locales used in Live Preview to avoid relying on fallback behavior.
3.  If consistent behavior between CDA and Live Preview is required, add include\_fallback=true to both request types.

After adding include\_fallback=true to Live Preview requests, verify that unlocalized entries display the master locale content in the preview mode as expected.
