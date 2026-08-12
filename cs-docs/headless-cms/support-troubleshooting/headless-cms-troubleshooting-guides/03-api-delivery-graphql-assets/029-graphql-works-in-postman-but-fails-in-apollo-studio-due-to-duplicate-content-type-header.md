---
title: "GraphQL Works in Postman but Fails in Apollo Studio Due to Duplicate Content-Type Header"
description: "GraphQL Works in Postman but Fails in Apollo Studio Due to Duplicate Content-Type Header"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/029-graphql-works-in-postman-but-fails-in-apollo-studio-due-to-duplicate-content-type-header
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs979ccc93e6f82ee2
---

# GraphQL Works in Postman but Fails in Apollo Studio Due to Duplicate Content-Type Header

GraphQL queries execute successfully in Postman but fail when the same query and credentials are used in Apollo Studio or Apollo Sandbox. The requests return errors or are rejected.

**Root Cause**

Apollo Studio and Apollo Sandbox automatically add a Content-Type: application/json header to all GraphQL requests. When users manually add the same header in the request configuration, a duplicate Content-Type header is sent. This causes the request to be rejected by the server.

**Resolution**

1.  In Apollo Studio or Apollo Sandbox, navigate to the request headers configuration.
2.  Remove any manually added Content-Type: application/json header, as Apollo adds this automatically.
3.  Retain only the authorization and access token headers.
4.  Re-run the query and confirm it succeeds.

After removing the duplicate Content-Type header, re-run the GraphQL query in Apollo Studio. If the query returns results, the header conflict has been resolved.
