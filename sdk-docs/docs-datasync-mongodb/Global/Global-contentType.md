---
title: "contentType"
description: "The `contentType` method specifies the content type to query."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-contenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## contentType

The `contentType` method specifies the content type to query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | Yes | — | UID of the content type to run the query against. |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .find()
  .then((result) => {
    // The result contains entries filtered by the 'blog' content type
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
