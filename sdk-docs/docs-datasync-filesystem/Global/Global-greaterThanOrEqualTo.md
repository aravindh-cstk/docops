---
title: "greaterThanOrEqualTo"
description: "The `greaterThanOrEqualTo` method retrieves entries where the field's value is greater than or equal to the specified number."
url: "https://www.contentstack.com/datasync-filesystem-global-greaterthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## greaterThanOrEqualTo

The `greaterThanOrEqualTo` method retrieves  entries where the field's value is greater than or equal to the specified number.

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
let data = blogQuery.greaterThanOrEqualTo('created_at','2015-03-12').find()
data.then((result) => {
  // result contains the data of entries where the 'created_at' date will be  greaterThan or equalto '2015-03-12'
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
