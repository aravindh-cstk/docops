---
title: "GraphQL 422 Error Due to Invalid Branch Key in Requests"
description: "GraphQL 422 Error Due to Invalid Branch Key in Requests"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/023-graphql-422-error-due-to-invalid-branch-key-in-requests
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs14e3c9b22c6b67ff
---

# GraphQL 422 Error Due to Invalid Branch Key in Requests

GraphQL API requests return a 422 Unprocessable Entity error. The requests appear structurally valid but are consistently rejected by the API.

**Root Cause**

A 422 error in this context is caused by invalid or non-existent branch keys included in the GraphQL request headers or query parameters. When the branch key referenced in the request does not match any existing branch in the stack, the API rejects the request with a 422 error.

**Resolution**

1.  Inspect the GraphQL request headers and query parameters to identify the branch key being sent.
2.  Verify that the branch key corresponds to an existing, active branch in the Contentstack stack.
3.  Correct or remove the invalid branch key from the request.
4.  Re-run the request and confirm that the 422 error no longer occurs.

After updating the branch key to a valid value, re-execute the GraphQL request. If the request completes with a 2xx response, the branch key is valid.
