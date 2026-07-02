---
title: "except"
description: "The except method excludes the specified fields from the response."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## except

The `except` method excludes the specified fields from the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fields | array | No | — | Array of field UIDs, using dot notation for querying embedded documents |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .except(['title', 'url', 'links'])
  .find()
  .then((result) => {
    // returns entries and projects all of their properties, except - ["title", "url", "links"]
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
