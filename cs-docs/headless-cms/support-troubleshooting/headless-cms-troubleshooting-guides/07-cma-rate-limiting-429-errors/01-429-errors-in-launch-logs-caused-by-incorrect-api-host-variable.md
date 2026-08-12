---
title: "429 Errors in Launch Logs Caused by Incorrect API_HOST Variable"
description: "429 Errors in Launch Logs Caused by Incorrect API_HOST Variable"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/01-429-errors-in-launch-logs-caused-by-incorrect-api-host-variable
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs27f8abb1f17dd379
---

# 429 Errors in Launch Logs Caused by Incorrect API_HOST Variable

A Contentstack Launch-hosted application generates 429 errors in its logs. The application is not intentionally making CMA calls, yet the errors point to CMA rate limit exhaustion.

**Root Cause**

The application's environment variable API\_HOST is set to api.contentstack.io, which is the CMA endpoint, instead of the CDA endpoint (cdn.contentstack.io). As a result, what should be CDA delivery calls are incorrectly routed to the CMA, exhausting the CMA rate limit and returning 429 errors.

**Resolution**

1.  Review the application's environment variables in the Contentstack Launch configuration.
2.  Locate the API\_HOST variable and correct its value from api.contentstack.io to cdn.contentstack.io (or the appropriate regional CDA endpoint).
3.  Redeploy the application with the corrected environment variable.
4.  Monitor the Launch logs after redeployment to confirm 429 errors no longer appear.

After correcting the API\_HOST variable and redeploying, check the application logs. If CMA 429 errors no longer occur, the requests are now correctly routed to the CDA endpoint.
