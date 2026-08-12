---
title: "Canvas Parameter Stops Preserving Transparency After CDN Migration"
description: "Canvas Parameter Stops Preserving Transparency After CDN Migration"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/10-canvas-parameter-stops-preserving-transparency-after-cdn-migration
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs4157fb0db93ec5f7
---

# Canvas Parameter Stops Preserving Transparency After CDN Migration

The canvas parameter on image URLs, which previously preserved transparent backgrounds, now renders transparency as a solid white background. This affects CRM email campaigns and dark mode rendering.

**Root Cause**

A CDN migration (from Fastly to Cloudflare) caused a regression in how the canvas parameter handles transparency. Cloudflare’s image transformation pipeline handles transparency differently from Fastly’s, and the canvas parameter behavior changed during the migration without a direct configuration equivalent.

**Resolution**

A direct fix for the canvas transparency regression through Cloudflare configuration was not feasible. Recommended workarounds:

1.  Pre-process images to include the correct background before uploading, so the asset itself has the intended background and does not rely on the canvas parameter for transparency handling.
2.  Apply background overlay or transparency handling at the frontend rendering layer rather than at the image URL level.
3.  Contact Contentstack Support if this regression is impacting production - escalation to the CDN team may produce a configuration fix.

After applying the workaround, confirm that image rendering in emails and dark mode displays the correct background behavior.
