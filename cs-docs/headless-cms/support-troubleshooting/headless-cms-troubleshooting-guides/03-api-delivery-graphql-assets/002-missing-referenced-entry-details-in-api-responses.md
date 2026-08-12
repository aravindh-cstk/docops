---
title: "Missing referenced entry details in API responses"
description: "Missing referenced entry details in API responses"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/002-missing-referenced-entry-details-in-api-responses
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs6ce7f19c0b532abf
---

# Missing referenced entry details in API responses

Retrieving content via the API may return incomplete data for referenced entries even when include parameters are used. This prevents developers from accessing nested or linked content within a single request.

**Root Cause**

The include\_all configuration is not enabled for the specific stack, limiting the ability to retrieve all referenced details.

**Resolution**

1.  Enable the include\_all feature for the stack settings to allow full reference retrieval.
2.  Ensure the API request parameters explicitly specify the references to be included.

After the include\_all feature is enabled, execute the API request for an entry with references. If the JSON response contains the full details of the referenced entries, the feature is active.
