---
title: "greaterThan"
description: "The `greaterThan` method retrieves entries where the specified field’s value is greater than the provided value."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-greaterthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## greaterThan

The `greaterThan` method retrieves entries where the specified field’s value is greater than the provided value.

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
  .greaterThan('age', 60)
  .find()
  .then((result) => {
    // Retrieves entries where age is greater than 60
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
