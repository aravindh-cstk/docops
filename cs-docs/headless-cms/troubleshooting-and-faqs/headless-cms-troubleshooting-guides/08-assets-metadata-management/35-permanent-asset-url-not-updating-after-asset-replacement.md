---
title: "Permanent Asset URL Not Updating After Asset Replacement"
description: "Permanent Asset URL Not Updating After Asset Replacement"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/35-permanent-asset-url-not-updating-after-asset-replacement
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs53d9343c9f5799ac
---

# Permanent Asset URL Not Updating After Asset Replacement

After replacing an asset in Contentstack, the permanent URL continues to deliver the old file. The new file is visible in the asset editor.

**Root Cause**

When an asset is replaced, the Asset UID stays the same but a new File UID is generated. The CDN caches the file at the permanent URL with a standard TTL. Until the CDN cache expires or is purged, the old file is served.

**Resolution**

1.  Wait 5-10 minutes - the CDN cache should expire automatically after asset replacement.
2.  Perform a hard refresh in the browser (Ctrl+Shift+R) to force a fresh fetch.
3.  If the old file is still served after 15 minutes, contact Contentstack Support and request a targeted CDN cache purge.
4.  Re-publish any entries referencing the asset after replacement.

After the CDN cache expires or is purged, access the permanent asset URL and confirm it delivers the new file.
