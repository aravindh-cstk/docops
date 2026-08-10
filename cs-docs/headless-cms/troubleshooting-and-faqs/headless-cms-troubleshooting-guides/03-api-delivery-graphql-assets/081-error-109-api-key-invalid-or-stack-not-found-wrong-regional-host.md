---
title: "Error 109 - API Key Invalid or Stack Not Found (Wrong Regional Host)"
description: "Error 109 - API Key Invalid or Stack Not Found (Wrong Regional Host)"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/081-error-109-api-key-invalid-or-stack-not-found-wrong-regional-host
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs6509ea734de400b0
---

# Error 109 - API Key Invalid or Stack Not Found (Wrong Regional Host)

API calls return the error: “We can’t find that Stack. Please try again.” with error\_code 109. The API key appears correct but the error persists.

**Root Cause**

Error 109 is returned when the API request is directed to a regional endpoint that does not host the stack. Contentstack infrastructure is region-specific (AWS NA, AWS EU, Azure NA, Azure EU, GCP EU, etc.). When the SDK or API client uses the default or wrong regional host, it cannot locate stacks that reside in a different region.

**Resolution**

1.  Identify the region in which the stack was created (visible in the Contentstack dashboard URL or stack settings).
2.  Update the SDK configuration to use the correct regional host. For example, for Azure NA: Stack.setHost(‘azure-na-api.contentstack.com’)
3.  For direct API calls, ensure the base URL matches the stack’s region. Examples:

-   AWS NA: cdn.contentstack.io
-   AWS EU: eu-cdn.contentstack.com
-   Azure NA: azure-na-cdn.contentstack.com
-   Azure EU: azure-eu-cdn.contentstack.com

1.  Re-run the request after updating the host and confirm a valid response is returned.

After correcting the regional host, execute the API call and confirm the stack is found and the response is returned without error 109.
