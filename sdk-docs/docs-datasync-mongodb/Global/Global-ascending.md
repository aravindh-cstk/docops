---
title: "ascending"
description: "The ascending method sorts the fetched entries in ascending order based on the specified field."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-ascending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ascending

The `ascending` method sorts the fetched entries in ascending order based on the specified field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field | string | Yes | — | The field to sort in ascending order |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .ascending('title')
  .find()
  .then((result) => {
    // The result contains entries sorted in ascending order by the 'title' field
  })
  .catch((error) => {
    // Handle errors that occur during the query execution.
  })
```
