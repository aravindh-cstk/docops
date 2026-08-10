---
title: "Changes Not Reflecting After Save and Publish in Live Preview"
description: "Changes Not Reflecting After Save and Publish in Live Preview"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/50-changes-not-reflecting-after-save-and-publish-in-live-preview
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs17f5b0d79624865c
---

# Changes Not Reflecting After Save and Publish in Live Preview

Changes made to entries are not reflected in Live Preview after saving and publishing. The editor panel shows updated content but the preview shows the old version.

**Root Cause**

Causes include: the onEntryChange callback not being registered, the Contentstack SDK not being used for data fetching, or CDN/application-level caching serving old content to the preview URL.

**Resolution**

1.  Register the onEntryChange callback: ContentstackLivePreview.onEntryChange(() => { /\* re-fetch entry and update state \*/ }). This fires whenever the editor saves a change.
2.  Ensure all data fetching in the preview context uses the Contentstack SDK so the live\_preview hash is included in requests.
3.  For cached ISR routes in Next.js, ensure preview mode bypasses the ISR cache.

After registering onEntryChange and verifying SDK data fetching, make a change in the editor, save, and confirm the preview updates within a few seconds.
