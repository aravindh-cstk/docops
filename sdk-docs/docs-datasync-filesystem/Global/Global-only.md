---
title: "only"
description: "The `only` method limits the returned fields in the result to the ones specified."
url: "https://www.contentstack.com/datasync-filesystem-global-notexists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## only

The `only` method limits the returned fields in the result to the ones specified.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| result | string | Yes | — | The field to evaluate |

Returns:
Type
Stack

**Example:**

```
const query = Stack.contentType('example').entries().only(['title','uid']).find()
query.then((result) => {
  // ‘result’ contains a list of entries with field title and uid only
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
