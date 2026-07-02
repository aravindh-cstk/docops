---
title: "ascending"
description: "The ascending method sorts the fetched entries in ascending order based on the specified field."
url: "https://www.contentstack.com/datasync-filesystem-global-ascending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ascending

The `ascending` method sorts the fetched entries in ascending order based on the specified field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Field UID used to sort the entries |

Returns:
Type
Stack

**Example:**

```
let blogQuery = Stack.contentType('example').entries()
let data = blogQuery.ascending('created_at').find()
data.then((result) => {
  // ‘result’ contains the list of entries which is sorted in ascending order on the basis of ‘created_at’.
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
