---
title: "How to Provide Access Token in the GraphQL Explorer"
description: "How to Provide Access Token in the GraphQL Explorer"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/028-how-to-provide-access-token-in-the-graphql-explorer
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csb2037be0edf755d1
---

# How to Provide Access Token in the GraphQL Explorer

Queries run in the GraphQL Explorer fail due to authorization errors. It is unclear where to input the access\_token to authenticate requests within the Explorer interface.

**Root Cause**

The GraphQL Explorer requires an access token to authenticate API requests. The token must be supplied through the Explorer’s HTTP headers configuration panel, not as a query parameter or inline in the query.

**Resolution**

1.  Open the Contentstack GraphQL Explorer from the stack dashboard.
2.  Locate the HTTP Headers panel (typically at the bottom of the Explorer interface).
3.  Add the authorization header in the following format: { “access\_token”: “your\_delivery\_token\_here” }
4.  Run the query. The Explorer will include the token in all subsequent requests.

After adding the access\_token to the HTTP Headers panel, re-run the query. If the query returns results without an authorization error, the token is correctly configured.
