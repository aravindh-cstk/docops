---
title: "connect"
description: "The connect method establishes a connection to MongoDB with optional configuration overrides"
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-connect"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## connect

The `connect` method establishes a connection to MongoDB with optional configuration overrides

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| overrides | object | Yes | — | Provides optional overrides or MongoDB-specific settings to customize query behavior. |

Returns:
Type
object

**Example:**

```
Stack
  .connect(overrides)
  .then((db) => {
    // mongodb connection object indexes will be created on the collection in the background if provided in config
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
