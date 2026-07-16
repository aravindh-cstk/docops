---
title: "count"
description: "The `count` method returns the total number of entries or assets that match the specified query."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-count"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## count

The `count` method returns the total number of entries or assets that match the specified query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | object | No | — | A filter object that defines conditions for the query. |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .count()
  .find()
  .then((result) => {
    // returns entries count, without any of its assets or references
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
