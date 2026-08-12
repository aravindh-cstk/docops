---
title: "Unpublished Asset Still Accessible via Direct CDN URL"
description: "Unpublished Asset Still Accessible via Direct CDN URL"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/34-unpublished-asset-still-accessible-via-direct-cdn-url
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csb09e98708b7c1d74
---

# Unpublished Asset Still Accessible via Direct CDN URL

An asset that was unpublished (or replaced) is still accessible via its direct CDN URL.

**Root Cause**

Asset URLs in Contentstack are public by default. Unpublishing removes the asset from API responses but does not restrict direct access to the CDN-hosted file. The CDN serves the file regardless of publish status because the file was not deleted from storage.

**Resolution**

1.  To make the asset completely inaccessible: enable the Secure Public URLs (Asset Privatization) feature. Contact Contentstack Support to request enablement.
2.  To immediately remove access: permanently delete the asset (not just unpublish) - this removes the file from storage and the CDN will return 404 after cache TTL.
3.  Request a CDN cache purge from Contentstack Support to immediately invalidate the cached file.

After enabling Secure Public URLs or permanently deleting the asset, confirm the direct URL returns a 403 or 404.
