---
title: "Apollo GraphQL Documentation References Incorrect Endpoint URI with /explore"
description: "Apollo GraphQL Documentation References Incorrect Endpoint URI with /explore"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/030-apollo-graphql-documentation-references-incorrect-endpoint-uri-with-explore
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csea37ade11ca2eec1
---

# Apollo GraphQL Documentation References Incorrect Endpoint URI with /explore

GraphQL implementation based on Apollo documentation fails because the documented URI format includes an /explore path suffix that does not work when used programmatically.

**Root Cause**

The /explore path is the browser-based GraphQL Explorer interface URL, not the API endpoint URL. Using the /explore URI in code or API clients results in requests reaching the wrong destination. The correct GraphQL API endpoint does not include /explore.

**Resolution**

1.  Use the correct GraphQL endpoint format without the /explore suffix. The standard format is: https://graphql.contentstack.com/stacks/{api\_key}
2.  Update all code, SDK configuration, and API client settings to use the correct endpoint format.
3.  Refer to the official Contentstack GraphQL documentation for the authoritative endpoint format.

After updating the endpoint URL in the application, re-run the GraphQL request. If the request connects and returns data, the correct endpoint is now in use.
