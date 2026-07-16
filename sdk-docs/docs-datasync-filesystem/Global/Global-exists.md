---
title: "exists"
description: "The `exists` method retrieves entries if the value of the specified field exists."
url: "https://www.contentstack.com/datasync-filesystem-global-exists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## exists

The `exists` method retrieves entries if the value of the specified field exists.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Field UID to filter |

Returns:
Type
Stack

**Example:**

```
let blogQuery = Stack.contentType('example').entries()
let data = blogQuery.exists('featured').find()
data.then((result) => {
  // ‘result’ contains the list of entries in which "featured" exists.
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
