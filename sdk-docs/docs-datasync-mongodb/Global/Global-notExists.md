---
title: "notExists"
description: "The notExists method filters entries that do not contain the specified field."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-notexists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## notExists

The `notExists` method filters entries that do not contain the specified field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | The field to check for absence in the entry. |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .notExists('emails')
  .find()
  .then((result) => {
    // The result contains entries where the 'emails' property does not exist.
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
