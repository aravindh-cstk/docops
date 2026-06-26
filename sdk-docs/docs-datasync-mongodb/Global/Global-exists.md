---
title: "exists"
description: "The `exists` method filters entries that contain the specified field."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-exists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## exists

The `exists` method filters entries that contain the specified field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Field to check existence for |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .exists('emails')
  .find()
  .then((result) => {
    // The result contains entries where the 'emails' property exists
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
