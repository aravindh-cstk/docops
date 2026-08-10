---
title: "What is the MAX_DOCUMENT_LIMIT_EXCEEDED error and how to resolve it?"
description: "What is the MAX_DOCUMENT_LIMIT_EXCEEDED error and how to resolve it?"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-faqs/18-graphql-faqs/06-what-is-the-max-document-limit-exceeded-error-and-how-to-resolve-it
doc_type: faq
_cms_section_uid: csc612b9bb46be2d6d
_cms_faq_uid: csadbbd03a4af4c12e
---

# What is the MAX_DOCUMENT_LIMIT_EXCEEDED error and how to resolve it?

Contentstack returns the MAX\_DOCUMENT\_LIMIT\_EXCEEDED error message when a GraphQL API request attempts to fetch more than 7,500 documents (assets, entries, their referenced assets and entries, etc.).

To resolve this error, you can reduce the total number of referenced items being queried or pass the skip or limit parameters while querying referenced items. Learn more about [fetching referenced entries or assets](/docs/developers/apis/graphql-content-delivery-api#retrieving-referenced-entries-or-assets).
