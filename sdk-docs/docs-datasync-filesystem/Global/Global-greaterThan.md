---
title: "greaterThan"
description: "The `greaterThan` method retrieves entries where the value of the specified field is greater than the given number."
url: "https://www.contentstack.com/datasync-filesystem-global-greaterthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## greaterThan

The `greaterThan` method retrieves entries where the value of the specified field is greater than the given number.

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
let data = blogQuery.greaterThan('created_at','2015-03-12').find()
data.then((result) => {
  // result contains the data of entries where the 'created_at' date will be greaterthan '2015-03-12'
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
