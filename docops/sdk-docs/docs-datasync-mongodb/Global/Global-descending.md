---
title: "descending"
description: "The `descending` method sorts the fetched entries in descending order based on the specified field."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-descending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## descending

The `descending` method sorts the fetched entries in descending order based on the specified field.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field | string | Yes | — | The field to sort in descending order |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .descending('title')
  .find()
  .then((result) => {
    // result sorted in descending manner with respect to 'title' field
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
