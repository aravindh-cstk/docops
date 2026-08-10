---
title: "Live Preview Blocked by Vercel Deployment Protection - 401 Error"
description: "Live Preview Blocked by Vercel Deployment Protection - 401 Error"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/45-live-preview-blocked-by-vercel-deployment-protection-401-error
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs71acdccb072139ea
---

# Live Preview Blocked by Vercel Deployment Protection - 401 Error

Live Preview returns a 401 Unauthorized error when attempting to load a preview URL hosted on Vercel. The preview works on localhost but not on the Vercel deployment.

**Root Cause**

Vercel Deployment Protection requires authentication before serving pages. When Contentstack’s Live Preview attempts to load the URL, the authentication cookie is not present, causing a 401. Vercel may also set X-Frame-Options: DENY.

**Resolution**

1.  In Vercel Project Settings > Deployment Protection, create a Protection Bypass Secret.
2.  Add the bypass secret as a query parameter to the Live Preview base URL in Contentstack: https://your-preview.vercel.app?x-vercel-protection-bypass={your-secret}
3.  Alternatively, configure Vercel to allow Contentstack app domains in trusted origins for the deployment protection bypass.
4.  If X-Frame-Options is blocking iframe embedding, enable ‘Open Live Preview in new tab’ to avoid the iframe requirement.

After configuring the bypass secret, reload Live Preview and confirm content loads without a 401 error.
