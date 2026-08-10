---
title: "Converting Animated GIF to Animated WebP Is Not Supported"
description: "Converting Animated GIF to Animated WebP Is Not Supported"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/08-assets-metadata-management/28-converting-animated-gif-to-animated-webp-is-not-supported
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs61dc3c6d36a052b4
---

# Converting Animated GIF to Animated WebP Is Not Supported

Using the Image Delivery API parameter format=webp on an animated GIF returns the original GIF file instead of an animated WebP. Conversion to static formats like JPG works correctly.

**Root Cause**

The Contentstack Image Delivery API does not support conversion of animated GIFs to animated WebP. The format=webp parameter converts the image to a static WebP frame, not an animated sequence. This is a known platform limitation.

**Resolution**

1.  Use an external tool or service (such as FFmpeg, CloudConvert, or Squoosh) to convert animated GIFs to animated WebP before uploading to Contentstack.
2.  Upload the pre-converted animated WebP file directly to Contentstack as the source asset.
3.  Serve the animated WebP file as-is from Contentstack without applying the format conversion parameter.

After uploading the pre-converted animated WebP file, request the asset URL and confirm it delivers the animated WebP format as expected.
