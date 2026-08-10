---
title: "AVIF Image Optimization Fails for Images Exceeding 4096 x 4096 Pixels"
description: "AVIF Image Optimization Fails for Images Exceeding 4096 x 4096 Pixels"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/30-avif-image-optimization-fails-for-images-exceeding-4096-x-4096-pixels
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs290a6bbc7f54324a
---

# AVIF Image Optimization Fails for Images Exceeding 4096 x 4096 Pixels

Image optimization using the AVIF format fails during testing. Error headers are returned in the response when requesting optimized AVIF output, while other formats like JPEG work correctly.

**Root Cause**

The Contentstack Image Delivery API enforces a 4096 x 4096 pixel limit for AVIF optimization. Images with dimensions exceeding this threshold cannot be processed into AVIF format and the optimization request will fail.

**Resolution**

1.  Check the dimensions of the source image. If the image exceeds 4096 pixels in either dimension, AVIF optimization is not available for that asset.
2.  Use auto=webp as a workaround. The WebP format does not have the same pixel dimension restriction and will serve a modern, well-compressed format with broad browser support.
3.  Alternatively, resize the source image to within 4096 x 4096 pixels before uploading if AVIF output is specifically required.

After switching to auto=webp for affected images, confirm that optimized images are served correctly without error headers in the response.
