---
title: "Image Size Increases After CDN Migration from Fastly/Akamai to Cloudflare"
description: "Image Size Increases After CDN Migration from Fastly/Akamai to Cloudflare"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/13-image-size-increases-after-cdn-migration-from-fastly-akamai-to-cloudflare
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs55f1c7cee36671fb
---

# Image Size Increases After CDN Migration from Fastly/Akamai to Cloudflare

After a CDN migration, image files served via Contentstack are noticeably larger than before the migration. The same images were smaller under the previous CDN provider.

**Root Cause**

The previous CDN (Fastly or Akamai) applied image compression by default, reducing file sizes automatically. After migration to Cloudflare, the image compression behavior changed - Cloudflare’s image resizing handles compression differently and may produce larger file sizes for the same source image without explicit quality settings.

**Resolution**

1.  Add an explicit quality parameter to all image URLs: ?quality=85 (or an appropriate value for the use case). This instructs Cloudflare’s image processing pipeline to apply compression, reducing file sizes.
2.  Test different quality values to find the right balance between file size reduction and visual quality. Values between 75 and 85 are typically effective for most images.
3.  For existing image URLs embedded in content, use a find-and-replace script or URL rewriting rule to append the quality parameter.

After adding the quality parameter, verify that image file sizes return to or below the pre-migration sizes while maintaining acceptable visual quality.
