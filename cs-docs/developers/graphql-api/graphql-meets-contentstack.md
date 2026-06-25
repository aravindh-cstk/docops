---
title: "[GraphQL API NEW] - GraphQL meets Contentstack"
description: GraphQL meets Contentstack
url: https://www.contentstack.com/docs/headless-cms/graphql-meets-contentstack
product: Contentstack
doc_type: overview
audience:
  - developers
version: NEW
last_updated: 2026-03-26
---

# [GraphQL API NEW] - GraphQL meets Contentstack

This page introduces how Contentstack supports fetching content through GraphQL, who it’s for (developers integrating Contentstack content delivery), and when to use it (when you want flexible, customized API responses for entries, assets, and related content in fewer calls).

## GraphQL meets Contentstack

Contentstack supports fetching content through GraphQL, an intuitive and flexible data query language, that lets you define and customize the API response of your GET calls. Using our [GraphQL Content Delivery API](../../../api-docs/api-detail/graphql-content-delivery-api.md), you can fetch [entries](../../content-managers/author-content/about-entries.md) and [assets](/docs/content-managers/working-with-assets/about-assets) as well as make image transformation API requests.

This means that you can create syntaxes to customize the responses of your API calls, to get precisely the data you want.

So, for example, you can fetch data of **only the **[**fields**](../create-content-types/about-fields.md)** that you want** (such as “Title” and “Description”) of entries, instead of data of all fields.

You can also fetch data of **multiple** or **referenced** [content types](../create-content-types/about-content-types.md) in a single request body. Consequently, it helps you retrieve more relevant data in fewer calls.

Read through our [API Reference documentation](../../../api-docs/api-detail/graphql-content-delivery-api.md#reference) to understand the different operators that are available for use with Contentstack GraphQL Content Delivery API.

## Common questions

### Which Contentstack API should I use to fetch content via GraphQL?
Use the [GraphQL Content Delivery API](../../../api-docs/api-detail/graphql-content-delivery-api.md).

### What can I fetch with Contentstack GraphQL?
You can fetch [entries](../../content-managers/author-content/about-entries.md) and [assets](/docs/content-managers/working-with-assets/about-assets) as well as make image transformation API requests.

### Can I request only specific fields from an entry?
Yes, you can fetch data of **only the **[**fields**](../create-content-types/about-fields.md)** that you want** (such as “Title” and “Description”) of entries.

### Where can I learn about available operators in the GraphQL Content Delivery API?
Read through the [API Reference documentation](../../../api-docs/api-detail/graphql-content-delivery-api.md#reference).