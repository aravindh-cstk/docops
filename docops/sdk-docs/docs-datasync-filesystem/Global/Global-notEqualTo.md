---
title: "notEqualTo"
description: "The `notEqualTo` method retrieves entries where the field’s value does not equal the specified value."
url: "https://www.contentstack.com/datasync-filesystem-global-notequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notEqualTo

The `notEqualTo` method retrieves entries where the field’s value does not equal the specified value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Field UID to filter |
| value | Any[] | Yes | — | An array of values to match against |

Returns:
Type
Stack

**Example:**

```
let blogQuery = Stack.contentType('example').entries()
let data = blogQuery.notEqualTo('title','Demo').find()
data.then((result) => {
  // ‘result’ contains the list of entries where value of the ‘title’ field will not be 'Demo'.
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
