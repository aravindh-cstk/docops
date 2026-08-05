---
title: "lessThan"
description: "The `lessThan` method retrieves entries where the value of a specified field is less than the provided value."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-lessthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## lessThan

The `lessThan` method retrieves entries where the value of a specified field is less than the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | The field to compare values against in the query. |
| value | any | Yes | — | The value or values to compare against the field. |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .lessThan('age', 25)
  .find()
  .then((result) => {
    // Retrieves entries where age is less than 25
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
