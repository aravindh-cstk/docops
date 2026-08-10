---
title: "Error 109 - Invalid API Key When Using the Wrong Regional Endpoint"
description: "Error 109 - Invalid API Key When Using the Wrong Regional Endpoint"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/053-error-109-invalid-api-key-when-using-the-wrong-regional-endpoint
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csdf8df97c39e73050
---

# Error 109 - Invalid API Key When Using the Wrong Regional Endpoint

API calls return error code 109: ‘api\_key is not valid’ or ‘We can’t find that Stack’ despite using the correct API key. The stack exists and is accessible via the Contentstack UI.

**Root Cause**

Error 109 occurs when the request is sent to a regional CDA endpoint that does not host the stack. Contentstack infrastructure is region-specific. A stack provisioned on Azure EU must be accessed via the Azure EU CDN endpoint. Using the standard AWS NA endpoint for an Azure-hosted stack produces a 109 error because the stack does not exist in that region’s database.

**Resolution**

1.  Identify the cloud provider and region for the stack from the dashboard URL or stack settings.
2.  Update the CDA base URL to the correct regional endpoint:

-   AWS NA: cdn.contentstack.io
-   AWS EU: eu-cdn.contentstack.com
-   Azure NA: azure-na-cdn.contentstack.com
-   Azure EU: azure-eu-cdn.contentstack.com

1.  Update the API host in SDK configurations, environment variables, and any hardcoded URLs.
2.  Re-run the API call and confirm the stack is found and a valid response is returned.

After updating to the correct regional endpoint, confirm the 109 error no longer appears and the API returns content from the correct stack.
