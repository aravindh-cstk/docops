---
title: "Restricting Asset Playback or Access to Specific Domains"
description: "Restricting Asset Playback or Access to Specific Domains"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/19-restricting-asset-playback-or-access-to-specific-domains
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs7e55f390bcf5e5d6
---

# Restricting Asset Playback or Access to Specific Domains

A customer wants to restrict video or image assets hosted in Contentstack so they can only be played or loaded from their own domain. They are considering a workflow of creating delivery tokens per user session, using the assets, and then deleting the token. They want to understand whether this is viable at scale.

**Root Cause**

Delivery tokens are environment-level credentials, not session-level tokens. They are not designed to be created and deleted per user session. Most Contentstack plans have a hard limit on the total number of delivery tokens per stack (typically 50–100), which would be exhausted almost immediately in a high-traffic scenario. Additionally, token creation and deletion via the CMA is subject to the CMA rate limit (10 RPS), making per-session token management impractical at scale.

**Resolution**

1.  Use the Secure Public URLs (Asset Privatization) feature instead. This generates short-lived, signed URLs for assets that expire after a configurable time window. Only valid signed URLs can access the asset, preventing direct URL sharing or embedding by external sites.
2.  To enable Secure Public URLs, contact Contentstack Support or your Customer Success Manager. The feature is enabled at the stack level.
3.  Once enabled, generate signed asset URLs server-side using the Contentstack SDK or API for each user session. The URL expires after the configured TTL, preventing long-term sharing.
4.  Do not use per-session delivery token creation and deletion - this approach is not viable at scale due to token count limits and CMA rate limits.

After enabling Secure Public URLs, verify that assets are only accessible via signed URLs and that direct access to the original asset URL returns an access denied response.
