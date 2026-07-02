---
title: "containedIn"
description: "The containedIn method retrieves entries where the specified field's value matches any value in the provided array."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-containedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## containedIn

The `containedIn` method retrieves entries where the specified field's value matches any value in the provided array.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | The field to compare values against in the query. |
| value | array | Yes | — | The value or values to compare against the field. |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .containedIn('emails', ['john.doe@some.com'])
  .find()
  .then((result) => {
    // The result contains entries where the 'emails' field includes 'john.doe@some.com'
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
