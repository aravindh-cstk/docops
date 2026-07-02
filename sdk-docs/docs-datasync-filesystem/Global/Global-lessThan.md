---
title: "lessThan"
description: "The lessThan method retrieves entries where the value of the specified field is less than the given number."
url: "https://www.contentstack.com/datasync-filesystem-global-lessthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## lessThan

The `lessThan` method retrieves entries where the value of the specified field is less than the given number.

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
let data = blogQuery.lessThan('created_at','2015-06-22').find()
data.then((result) => {
  // result contains the data who's 'created_at date' is less than '2015-06-22'
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
