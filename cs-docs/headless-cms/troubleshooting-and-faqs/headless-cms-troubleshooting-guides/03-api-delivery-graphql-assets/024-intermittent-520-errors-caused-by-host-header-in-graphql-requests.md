---
title: "Intermittent 520 Errors Caused by Host Header in GraphQL Requests"
description: "Intermittent 520 Errors Caused by Host Header in GraphQL Requests"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/024-intermittent-520-errors-caused-by-host-header-in-graphql-requests
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cscca0c38cbc9d857c
---

# Intermittent 520 Errors Caused by Host Header in GraphQL Requests

GraphQL requests intermittently return HTTP 520 errors. The errors occur specifically when the Host header is explicitly included in the request, while requests without the Host header succeed.

**Root Cause**

When the Host header is explicitly set in the GraphQL request, it interferes with Cloudflare’s routing logic. Cloudflare uses the Host header to determine the backend destination; a manually set or incorrect Host header causes misrouting at the CDN layer, resulting in 520 origin connection errors.

**Resolution**

1.  Remove the manually set Host header from the GraphQL request configuration.
2.  Allow the HTTP client to set the Host header automatically based on the request URL.
3.  If the Host header is required by the client’s network configuration, contact Contentstack Support. A backend fix can be implemented to bypass Cloudflare routing for the affected traffic pattern.

After removing the explicit Host header, re-run the GraphQL request. If responses are returned with a 2xx status code and the 520 errors no longer occur, the routing issue is resolved.
