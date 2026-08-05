---
title: "skip"
description: "The `skip` method skips a given number of results from the beginning of the result set."
url: "https://www.contentstack.com/datasync-filesystem-global-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## skip

The `skip` method skips a given number of results from the beginning of the result set.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| skip | number | Yes | — | Skips the specified number of entries in the result set |

Returns:
Type
Stack

**Example:**

```
let blogQuery = Stack.contentType('example').entries()
let data = blogQuery.skip(5).find()
data.then((result) => {
  //result
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
