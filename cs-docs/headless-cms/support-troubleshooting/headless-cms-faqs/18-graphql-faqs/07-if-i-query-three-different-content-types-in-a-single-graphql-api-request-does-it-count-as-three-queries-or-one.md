---
title: "If I query three different content types in a single GraphQL API request, does it count as three queries or one?"
description: "If I query three different content types in a single GraphQL API request, does it count as three queries or one?"
url: /headless-cms/support-troubleshooting/headless-cms-faqs/18-graphql-faqs/07-if-i-query-three-different-content-types-in-a-single-graphql-api-request-does-it-count-as-three-queries-or-one
doc_type: faq
_cms_section_uid: csc612b9bb46be2d6d
_cms_faq_uid: cs1ce2a05a3ae4239c
---

# If I query three different content types in a single GraphQL API request, does it count as three queries or one?

Contentstack counts each GraphQL query as **one** irrespective of the number of content types queried in it. Similarly, the rate limit remains the same whether you query one or more than one content types in a single API request.
