---
title: "Image crop Parameter Ignored - CDN-Level Bug"
description: "Image crop Parameter Ignored - CDN-Level Bug"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/09-image-crop-parameter-ignored-cdn-level-bug
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs614400f0395a1497
---

# Image crop Parameter Ignored - CDN-Level Bug

The crop parameter in image transformation URLs has no effect. The original uncropped image is returned despite valid crop parameters being present in the URL. This impacts live, customer-facing pages.

**Root Cause**

The crop parameter being silently ignored is caused by a CDN-level regression. Image transformation parameters such as crop, canvas, and quality are processed by the CDN provider’s image transformation pipeline. When the CDN updates its image transformation configuration or migrates between providers, the transformation pipeline can regress, causing previously working parameters to be ignored.

**Resolution**

1.  If crop parameters stop working unexpectedly, contact Contentstack Support immediately and provide affected image URLs as examples.
2.  The Contentstack CDA team will raise the issue with the CDN partner for investigation and fix.
3.  As an interim workaround while the CDN fix is applied, consider server-side or build-time image cropping using an external image processing service or tool.

After the CDN fix is applied, test image URLs with crop parameters and confirm the expected cropped output is returned.
