---
title: "limit "
description: "The `limit` method sets the maximum number of entries to retrieve."
url: "https://www.contentstack.com/datasync-filesystem-global-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## limit 

The `limit` method sets the maximum number of entries to retrieve.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | number | Yes | — | Maximum number of entries to be returned |

Returns:
Type
Stack

**Example:**

```
let blogQuery = Stack.contentType('example').entries()
let data = blogQuery.limit(10).find()
data.then((result) => {
  // result contains the limited number of entries
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
