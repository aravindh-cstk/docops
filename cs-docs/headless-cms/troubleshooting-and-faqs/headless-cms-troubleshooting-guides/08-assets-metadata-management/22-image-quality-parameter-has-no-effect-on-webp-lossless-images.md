---
title: "Image quality Parameter Has No Effect on WEBP Lossless Images"
description: "Image quality Parameter Has No Effect on WEBP Lossless Images"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/22-image-quality-parameter-has-no-effect-on-webp-lossless-images
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs7fdd7d9a204e558d
---

# Image quality Parameter Has No Effect on WEBP Lossless Images

Modifying the quality query parameter in the Image Delivery API URL (for example, ?quality=1 vs ?quality=100) produces no change in file size or visual quality for WEBP images. Both values return identical results.

**Root Cause**

The quality parameter is not applicable to WEBP lossless images. WEBP lossless encoding does not use a lossy quality scale; the image data is always compressed without perceptual quality loss regardless of the quality value passed. This is a format-level characteristic, not a Contentstack limitation.

**Resolution**

This is expected behavior and requires no corrective action. To achieve file size reduction for WEBP images:

1.  Use WEBP lossy format by specifying format=webp without lossless encoding - lossy WEBP does respond to the quality parameter.
2.  If lossless output is required and file size is a concern, consider pre-optimizing the source image before uploading.

After switching to lossy WEBP format, confirm that varying the quality parameter produces a measurable difference in file size.
