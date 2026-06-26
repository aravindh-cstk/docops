---
title: "[GraphQL API NEW] - About GraphQL"
uid: bltc023ff75af937fdc
url: https://www.contentstack.com/docs/headless-cms/about-graphql
contentstack:
  environment: production
  assets: []
  references:
    -
      uid: blt641003bf9368e112
      content_type: navigation
      title: null
      url: null
    -
      uid: blt183b6e9ac66227e0
      content_type: navigation
      title: null
      url: null
---
about-graphql.md
---
title: "[GraphQL API NEW] - About GraphQL"
description: GraphQL is an intuitive query language that helps you define the response data of your GET API calls.
url: https://www.contentstack.com/docs/developers/graphql-api/about-graphql
product: Contentstack
doc_type: concept
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [GraphQL API NEW] - About GraphQL

This page explains what GraphQL is in the context of Contentstack and why you might use it to define and structure response data for GET API calls. It is intended for developers who want to query specific modules of data, including referenced content, and should be used when deciding whether and how to use GraphQL with Contentstack.

## About GraphQL

GraphQL is an intuitive query language that helps you define the response data of your GET API calls. Instead of querying the whole data, it allows you to query a module of your data. Using GraphQL you can structure the response according to your technical requirements and use cases.

For example, you can fetch the values of the **Title** and **Description** [fields](../create-content-types/about-fields.md) of [entries](../../content-managers/author-content/about-entries.md), instead of the values of all fields. It also helps you fetch data of referenced and multiple [content types](../create-content-types/about-content-types.md)[/docs/developers/create-content-types/about-content-types](../create-content-types/about-content-types.md).

If you haven’t worked with GraphQL before, we highly recommend reading the following resources:
- [Introduction to GraphQL](https://graphql.org/learn/)
- [GraphQL Guides](https://www.graphql.com/guides/)

You can browse through the following topics, mentioned in the “More Articles” section, to learn how you can use GraphQL with Contentstack.

## Common questions

### What is GraphQL used for on this page?
GraphQL is used to define the response data of your GET API calls and query only a module of your data instead of querying the whole data.

### Can I fetch only specific fields with GraphQL?
Yes, for example, you can fetch the values of the **Title** and **Description** fields of entries instead of the values of all fields.

### Does GraphQL help with referenced content and multiple content types?
Yes, it helps you fetch data of referenced and multiple content types.

### Where should I start if I’m new to GraphQL?
If you haven’t worked with GraphQL before, you can read the recommended resources: [Introduction to GraphQL](https://graphql.org/learn/) and [GraphQL Guides](https://www.graphql.com/guides/).