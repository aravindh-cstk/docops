---
title: "except"
description: "The except method accepts an array of field UIDs. Only the fields specified in the array will be excluded from the result set."
url: "https://www.contentstack.com/datasync-filesystem-global-equalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## except

The `except` method accepts an array of field UIDs. Only the fields specified in the array will be excluded from the result set.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| result | string | Yes | — | The field to evaluate |

Returns:
Type
Stack

**Example:**

```
const query = Stack.contentType('example').entries().except(['title','uid']).find()
query.then((result) => {
  // ‘result’ contains a list of entries without field title and uid 
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
