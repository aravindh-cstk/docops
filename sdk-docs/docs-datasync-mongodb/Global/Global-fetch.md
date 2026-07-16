---
title: "fetch"
description: "The `fetch` method executes a query using the provided query object. It returns a single entry/asset/content type object after applying all filters and references."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

The `fetch` method executes a query using the provided query object. It returns a single entry/asset/content type object after applying all filters and references.

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
  .fetch()
  .then((result) => {
    // returns a 'blog' content type's entries
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
