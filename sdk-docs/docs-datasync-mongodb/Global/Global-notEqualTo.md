---
title: "notEqualTo"
description: "The notEqualTo method retrieves entries where the specified field’s value does not equal the given value."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-notequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## notEqualTo

The `notEqualTo` method retrieves entries where the specified field’s value does not equal the given value.

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
  .notEqualTo('title', 'Demo')
  .find()
  .then((result) => {
    // Retrieves entries where 'title' is not equal to 'Demo'
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
