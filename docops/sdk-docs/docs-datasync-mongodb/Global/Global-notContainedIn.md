---
title: "notContainedIn"
description: "The `notContainedIn` method retrieves entries where the specified field’s value does not match any value in the given array."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-notcontainedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notContainedIn

The `notContainedIn` method retrieves entries where the specified field’s value does not match any value in the given array.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | The field to compare values against in the query. |
| value | any | Yes | — | Array of values to exclude |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .notContainedIn('emails', ['john.doe@some.com'])
  .find()
  .then((result) => {
    // The result contains entries where the 'emails' property does not include 'john.doe@some.com'
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
