---
title: "Assets Loaded on Fraudulent or Unauthorized External Domains"
description: "Assets Loaded on Fraudulent or Unauthorized External Domains"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/08-assets-metadata-management/17-assets-loaded-on-fraudulent-or-unauthorized-external-domains
doc_type: faq
_cms_section_uid: cs72e172c68e3c1a5d
_cms_faq_uid: cs54ed7b7a45816909
---

# Assets Loaded on Fraudulent or Unauthorized External Domains

Contentstack-hosted assets are being embedded and displayed on fraudulent or scam websites using the direct asset URLs. The customer wants to restrict which domains can load their assets.

**Root Cause**

Contentstack assets are publicly accessible by default once published - the CDN does not enforce referrer-based domain restrictions. Any website that obtains the direct asset URL can embed and display the asset without restriction.

**Resolution**

1.  Enable the Secure Public URLs feature. This replaces permanent asset URLs with signed, time-bound URLs that expire. Without a valid signed token, the asset URL cannot be loaded - preventing unauthorized websites from using the assets.
2.  In the application’s asset delivery logic, generate signed URLs server-side and serve them to end users. Ensure the token expiry is short enough that cached tokens cannot be shared.
3.  Report the fraudulent domains to the relevant domain registrar and hosting provider for takedown.

After enabling Secure Public URLs and implementing server-side signed URL generation, confirm that the fraudulent domain’s asset embeds no longer load (they will receive access denied errors).
