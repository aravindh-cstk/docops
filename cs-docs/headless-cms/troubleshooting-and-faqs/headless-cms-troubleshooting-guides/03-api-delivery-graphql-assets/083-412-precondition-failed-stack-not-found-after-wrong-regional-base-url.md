---
title: "412 Precondition Failed - Stack Not Found After Wrong Regional Base URL"
description: "412 Precondition Failed - Stack Not Found After Wrong Regional Base URL"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/083-412-precondition-failed-stack-not-found-after-wrong-regional-base-url
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csff01d5346218d318
---

# 412 Precondition Failed - Stack Not Found After Wrong Regional Base URL

After activating a Contentstack instance and running the starter kit, a Precondition Failed error is returned with the message: “We can’t find the stack.” The API key and credentials appear correct.

**Root Cause**

The starter kit or application is configured with a base URL pointing to the wrong cloud region. For example, an instance provisioned on Azure is being accessed using the AWS base URL. Each Contentstack cloud region uses a distinct base URL, and using a mismatched URL causes the stack lookup to fail with a 412 error.

**Resolution**

1.  Identify the cloud region for the Contentstack instance (AWS NA, Azure NA, AWS EU, Azure EU, etc.) from the dashboard or provisioning confirmation.
2.  Update the base URL in the starter kit or application configuration to match the correct region. For example, for Azure NA the API base URL is azure-na-api.contentstack.com.
3.  Refer to the Contentstack region-specific documentation for the correct base URLs for each region.

After updating the base URL to the correct regional endpoint, re-run the starter kit and confirm that the stack is found and API calls return successfully.
