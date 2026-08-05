---
title: "Stack"
description: "The Stack instance serves as the primary interface for interacting with your Contentstack data stored in MongoDB. It provides methods to query entries , assets , and content type schemas. Example: const Stack = Contentstack.Stack(config);"
url: "https://www.contentstack.com/developers/sdks/datasync-sdk-mongodb/typescript/reference/stack"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Stack

## Stack

The [Stack](/docs/developers/set-up-stack/about-stack) instance serves as the primary interface for interacting with your Contentstack data stored in MongoDB. It provides methods to query [entries](/docs/content-managers/author-content/about-entries), [assets](/docs/content-managers/working-with-assets/about-assets), and [content type](/docs/developers/create-content-types/about-content-types) schemas.

**Example:**

```
const Stack = Contentstack.Stack(config);
```

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| dbName | string | No | — | Name of the MongoDB database. Defaults to `'contentstack-db'` . |
| uri | string | No | — | MongoDB connection URI. Defaults to `'mongodb://localhost:27017'` . |
| options | object | No | — | MongoDB connection options. Refer to MongoClient Options for details. |
