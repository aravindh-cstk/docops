---
title: "notContainedIn"
description: "The `notContainedIn` method retrieves entries where the specified field's value does not match any in the given array."
url: "https://www.contentstack.com/datasync-filesystem-global-notcontainedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notContainedIn

The `notContainedIn` method retrieves entries where the specified field's value does not match any in the given array.

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
let data = blogQuery.notContainedIn('title', ['Demo', 'Welcome']).find()
data.then((result) => {
  // 'result' contains the list of entries where value of the title field should not be either "Demo" or ‘Welcome’
}).catch((error) => {
  // Handle errors that occur during the query execution
})
```
