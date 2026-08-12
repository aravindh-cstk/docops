---
title: "Missing fields in REST API entry response"
description: "Missing fields in REST API entry response"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/005-missing-fields-in-rest-api-entry-response
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs6eb6cd98c1323d70
---

# Missing fields in REST API entry response

Retrieving content via the REST API may return incomplete data when querying an older version of an entry. This prevents viewing fields like overview or table\_of\_contents that are visible in the Entry UI.

**Root Cause**

The requested entry version does not contain the specific fields added in later versions of the content.

**Resolution**

1.  Verify the version number of the entry being requested in the API call.
2.  Query the latest version of the entry to ensure all fields are included in the response.
3.  Compare the API output against the Entry UI to identify version discrepancies.

After updating the API request to target the latest version, execute the GET request. If the missing fields appear in the response, the content is correctly synchronized.
