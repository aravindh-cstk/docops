---
title: "Analytics API Returns No Data or Format Error: Wrong Endpoint"
description: "Analytics API Returns No Data or Format Error: Wrong Endpoint"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/03-analytics-api-returns-no-data-or-format-error-wrong-endpoint
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs4416e04553d4dd11
---

# Analytics API Returns No Data or Format Error: Wrong Endpoint

The Usage Analytics API returns no results or a format error. The request appears correctly structured but consistently fails.

**Root Cause**

The Analytics API and the CMA use different base URLs. Analytics requests sent to the CMA endpoint will fail. Analytics requests must be sent to the Analytics-specific endpoint.

**Resolution**

1.  Use the correct base URL for Analytics API requests:

-   EU region: [https://eu-app.contentstack.com](https://eu-app.contentstack.com)
-   NA region: [https://app.contentstack.com](https://app.contentstack.com)

3.  Do not use the CMA base URL (api.contentstack.io for AWS NA, or eu-api.contentstack.com for AWS EU) for Analytics API calls.
4.  Update the endpoint in the application or Postman configuration and re-run the Analytics request.

After correcting the base URL, re-run the Analytics API request. If data is returned without a format error, the correct endpoint is now in use.
