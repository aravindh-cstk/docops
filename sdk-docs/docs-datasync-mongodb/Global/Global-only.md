---
title: "only"
description: "The only method includes only the specified fields in the result set."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## only

The `only` method includes only the specified fields in the result set.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fields | array | Yes | — | Array of field UIDs to be included (dot notation supported) |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .only(['title', 'url', 'links'])
  .find()
  .then((result) => {
    // Returns entries with only the 'title', 'url', and 'links' fields
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
