---
title: "entries"
description: "The entries method initiates a query for a set of entries within the specified content type."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-entries"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## entries

The `entries` method initiates a query for a set of entries within the specified content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | UID of the entry to fetch; if not provided, returns the first entry found. |

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
