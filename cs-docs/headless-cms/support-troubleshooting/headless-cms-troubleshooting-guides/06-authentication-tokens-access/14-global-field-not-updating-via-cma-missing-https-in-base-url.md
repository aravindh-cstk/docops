---
title: "Global Field Not Updating via CMA - Missing https:// in Base URL"
description: "Global Field Not Updating via CMA - Missing https:// in Base URL"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/14-global-field-not-updating-via-cma-missing-https-in-base-url
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csc6a6f5c963701a85
---

# Global Field Not Updating via CMA - Missing https:// in Base URL

CMA requests to update a global field appear to succeed (returning a 200 response) but the global field does not change in Contentstack. The field values remain at their previous state after the request.

**Root Cause**

The request was being made to a non-HTTPS base URL (for example, http:// instead of https://). Without the HTTPS protocol, the request may not reach the correct CMA endpoint. In some configurations, the http:// request silently succeeds at the network level but does not reach the CMA handler, resulting in a no-op.

**Resolution**

1.  Verify the base URL in the API request uses https://:
2.  Correct: https://api.contentstack.io/v3/global\_fields/{uid}
3.  Incorrect: http://api.contentstack.io/v3/global\_fields/{uid} or api.contentstack.io/v3/global\_fields/{uid}
4.  Update all CMA requests in the integration to use https:// and retry the global field update.

After correcting the base URL to https://, confirm the PUT request updates the global field and the change is reflected in the Contentstack CMS UI.
