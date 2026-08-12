---
title: "Assets Returning application/json Content-Type Instead of Image MIME Type"
description: "Assets Returning application/json Content-Type Instead of Image MIME Type"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/11-assets-returning-application-json-content-type-instead-of-image-mime-type
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs5bc05e41bcb8b068
---

# Assets Returning application/json Content-Type Instead of Image MIME Type

Images served via the Contentstack CDN intermittently return a Content-Type of application/json instead of the expected image MIME type (for example, image/jpeg or image/png). This causes images to fail to render and broken image placeholders to appear.

**Root Cause**

This Content-Type mismatch is caused by a CDN-level processing regression. The CDN’s image transformation pipeline incorrectly sets the content type on responses for certain image assets, particularly when image transformation parameters (such as resize, quality, or format conversion) are applied. The underlying asset is correct - the issue is in the CDN response headers.

**Resolution**

1.  Contact Contentstack Support immediately if widespread application/json responses are observed for image assets. Provide affected image URLs as examples.
2.  The CDA team will investigate and escalate to the CDN partner for a fix.
3.  As an interim mitigation, implement client-side content type validation: check the response Content-Type header before rendering as an image, and retry the request without transformation parameters if the content type is incorrect.
4.  Remove or simplify image transformation parameters in the URL as a temporary workaround to avoid triggering the transformation pipeline.

After the CDN fix is applied, test image URLs with transformation parameters and confirm the correct image MIME type is returned in the Content-Type header.
