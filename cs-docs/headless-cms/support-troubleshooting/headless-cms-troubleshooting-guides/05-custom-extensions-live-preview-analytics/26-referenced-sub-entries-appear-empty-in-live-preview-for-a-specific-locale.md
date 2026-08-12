---
title: "Referenced Sub-Entries Appear Empty in Live Preview for a Specific Locale"
description: "Referenced Sub-Entries Appear Empty in Live Preview for a Specific Locale"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/26-referenced-sub-entries-appear-empty-in-live-preview-for-a-specific-locale
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs0b8b946f58a51bd4
---

# Referenced Sub-Entries Appear Empty in Live Preview for a Specific Locale

When previewing a parent entry (for example, a homepage) in a specific locale such as pt-pt, referenced sub-entries appear empty in the preview even though they have content in the master locale.

**Root Cause**

Live Preview does not support automatic locale fallback for referenced entries. If a referenced sub-entry has not been localized for the previewed locale, Live Preview returns empty content for that reference - it does not fall back to the master locale automatically, unlike the standard CDA.

**Resolution**

1.  Localize all referenced sub-entries for the locale being previewed.
2.  Remove or update references to deleted sub-entries to prevent empty slots in the preview.
3.  Ensure the front-end application’s Live Preview fetch logic explicitly handles missing referenced entries to prevent rendering failures.

After localizing the referenced entries, reload the Live Preview for the affected locale and confirm sub-entries now render with the expected content.
