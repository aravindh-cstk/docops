---
title: "lessThanOrEqualTo"
description: "The `lessThanOrEqualTo` method retrieves entries where the specified field’s value is less than or equal to the given value."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-lessthanorequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## lessThanOrEqualTo

The `lessThanOrEqualTo` method retrieves entries where the specified field’s value is less than or equal to the given value.

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
  .lessThanOrEqualTo('age', 25)
  .find()
  .then((result) => {
    // Retrieves entries where age is less than or equal to 25
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
