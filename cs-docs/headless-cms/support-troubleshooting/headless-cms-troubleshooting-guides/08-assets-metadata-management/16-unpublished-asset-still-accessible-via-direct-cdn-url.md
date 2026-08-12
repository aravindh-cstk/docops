---
title: "Unpublished Asset Still Accessible via Direct CDN URL"
description: "Unpublished Asset Still Accessible via Direct CDN URL"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/16-unpublished-asset-still-accessible-via-direct-cdn-url
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csd7842796186853a8
---

# Unpublished Asset Still Accessible via Direct CDN URL

An asset that has been unpublished in Contentstack remains publicly accessible via its direct CDN URL and continues to be indexed by search engines. Republishing a replacement does not make the old URL inaccessible.

**Root Cause**

Assets hosted on Contentstack are served via CDN. Unpublishing an asset in Contentstack removes it from the CDA API response (it will no longer be returned by content queries), but it does not purge the CDN cache for the direct asset URL or restrict access to the URL. Anyone who has the direct URL can continue to access the asset as long as the CDN has it cached or until the CDN TTL expires.

**Resolution**

1.  Enable the Secure Public URLs feature for the stack. This feature generates time-bound, token-based URLs for assets, making asset URLs non-permanent and inaccessible without a valid token.
2.  After enabling Secure Public URLs, the direct asset URL that was previously accessible will require a valid signed token. Existing bookmarked or cached URLs will fail after the token expires.
3.  Submit a de-indexing request to search engines (via Google Search Console URL Removal tool) for the old asset URL to remove it from search results.
4.  Contact Contentstack Support to request a CDN cache purge for the specific old asset URL if immediate inaccessibility is required.

After enabling Secure Public URLs, confirm that accessing the old asset URL directly returns an error (403 or 401) rather than the asset content.
