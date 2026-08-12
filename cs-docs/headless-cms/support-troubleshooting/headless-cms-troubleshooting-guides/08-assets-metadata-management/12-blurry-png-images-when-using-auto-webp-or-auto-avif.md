---
title: "Blurry PNG Images When Using auto=webp or auto=avif"
description: "Blurry PNG Images When Using auto=webp or auto=avif"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/12-blurry-png-images-when-using-auto-webp-or-auto-avif
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs0cad7727ddaf0031
---

# Blurry PNG Images When Using auto=webp or auto=avif

PNG images appear blurry or lower quality in production when the auto=webp or auto=avif image transformation parameter is applied. The blurriness is inconsistent - different formats are affected at different times.

**Root Cause**

The blurriness is caused by a CDN-level compression regression in the image transformation pipeline for WebP and AVIF format conversions. The CDN partner’s compression settings for the conversion process produce lower quality output than expected for PNG source images.

**Resolution**

1.  Contact Contentstack Support and provide example image URLs showing the blurry output. The CDA team will escalate to the CDN partner.
2.  The CDN partner applies a production fix to correct the compression quality for WebP and AVIF conversions.
3.  As a short-term workaround, explicitly set a quality parameter alongside the format conversion: ?auto=webp&quality=85. This overrides the default compression level and can mitigate the blurriness.

After the CDN fix is confirmed, test affected image URLs with auto=webp and confirm images are rendered at the expected quality.
