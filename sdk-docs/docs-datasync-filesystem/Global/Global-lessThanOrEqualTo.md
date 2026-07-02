---
title: "lessThanOrEqualTo"
description: "The lessThanOrEqualTo method retrieves entries where the field's value is less than or equal to the specified number."
url: "https://www.contentstack.com/datasync-filesystem-global-lessthanorequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## lessThanOrEqualTo

The `lessThanOrEqualTo` method retrieves entries where the field's value is less than or equal to the specified number.

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
let data = blogQuery.lessThanOrEqualTo('created_at','2015-06-22').find()
data.then((result) => {
  // result contain the data of entries where the 'created_at' date will be less than or equalto '2015-06-22'.
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
