---
title: "All Assets Are Always Served via the Image Delivery API"
description: "All Assets Are Always Served via the Image Delivery API"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/23-all-assets-are-always-served-via-the-image-delivery-api
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csd2184958e3c4f459
---

# All Assets Are Always Served via the Image Delivery API

Assets are requested without any image optimization parameters (for example, without ?quality=100 or format=webp) in an attempt to bypass the Image Delivery API and reduce monthly request counts. However, API usage counts remain unchanged.

**Root Cause**

All assets uploaded to Contentstack are served via the Image Delivery API by default, regardless of whether optimization query parameters are present in the URL. Omitting parameters does not bypass the Image Delivery API - every asset request, with or without parameters, is counted as an Image Delivery API call.

**Resolution**

API request counts from asset delivery cannot be bypassed by changing the URL format. To reduce Image Delivery API usage:

1.  Implement client-side or CDN-level caching to reduce repeated requests to the same asset.
2.  Review asset usage patterns in Product Analytics to identify high-frequency asset requests and optimize delivery through caching or lazy loading.
3.  Contact the Contentstack account team to review quota allocations if asset delivery volume consistently exceeds plan limits.

After implementing caching, monitor the Image Delivery API usage metrics in the Product Analytics dashboard to confirm that repeated requests to the same asset are being served from cache.
