---
title: "Image Optimization Best Practices for Contentstack Delivery"
description: "Image Optimization Best Practices for Contentstack Delivery"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/32-image-optimization-best-practices-for-contentstack-delivery
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: csb2379221eafdafd0
---

# Image Optimization Best Practices for Contentstack Delivery

High Image Delivery API usage, slow asset load times, or large bandwidth consumption can result from sub-optimal asset delivery configuration. The following practices reduce bandwidth and improve performance.

**Resolution**

-   Use auto=webp to serve WebP format to browsers that support it, reducing file size compared to JPEG or PNG without perceptual quality loss.
-   Set quality values between 70 and 85 for JPEG and lossy WebP. Values above 90 provide diminishing returns in visual quality but significant increases in file size.
-   Use width and height parameters to serve appropriately sized images per device or viewport, avoiding delivery of oversized images to mobile clients.
-   Enable lazy loading in the front-end to defer off-screen image requests until the user scrolls toward them.
-   Avoid requesting the same asset with different parameter combinations unnecessarily, as each unique URL combination counts as a separate API request.
-   Use fit=bounds or fit=crop to control aspect ratio handling when resizing, preventing unexpected distortion.
-   Monitor Image Delivery API consumption in Product Analytics to identify high-frequency or high-bandwidth assets and target them for optimization first.

After applying optimization parameters, measure the before-and-after file sizes and load times. If asset sizes are reduced and API call counts decrease due to caching, the optimizations are effective.
