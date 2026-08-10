---
title: "Live Preview Not Supported with GraphQL"
description: "Live Preview Not Supported with GraphQL"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/18-live-preview-not-supported-with-graphql
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: csc69eb144ea1a030b
---

# Live Preview Not Supported with GraphQL

A customer attempts to implement Live Preview using GraphQL queries. The preview does not load draft or unpublished content, and integration guidance is unclear.

**Root Cause**

Live Preview requires a live\_preview hash to be passed with every request to retrieve draft content. The GraphQL API cannot process the live\_preview hash parameter in the same way as the REST API. This makes standard Live Preview integration incompatible with direct GraphQL usage.

**Resolution**

For GraphQL-based implementations:

1.  Use the Live Preview Utils SDK to generate the live\_preview hash from the editor session.
2.  Pass both the live\_preview hash and the preview\_token in the GraphQL request headers.
3.  Listen for content updates using the SDK’s onEntryChange callback and re-fetch the GraphQL query with the updated hash.
4.  Refer to the Contentstack Live Preview with GraphQL documentation for the correct header format and query structure.

After implementing the hash-passing pattern in GraphQL headers, confirm that draft content changes in the editor are reflected in the preview response.
