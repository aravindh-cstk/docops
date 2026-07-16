---
title: "find"
description: "The `find` method processes and executes all built queries, and returns the matching result."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The `find` method processes and executes all built queries, and returns the matching result.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | object | No | — | Query object that overrides all previous query filters |

Returns:
Type
object

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .find()
  .then((result) => {
    // returns 'blog' content type's entries
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
