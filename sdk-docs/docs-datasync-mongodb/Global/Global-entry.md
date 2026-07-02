---
title: "entry"
description: "The entry method retrieves a single entry by its UID from the specified content type."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## entry

The `entry` method retrieves a single entry by its UID from the specified content type.

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
  .entry('uid')
  .find()
  .then((result) => {
    // returns the entry based on its 'uid', if not provided, it would return the 1st entry found in 'blog' content type
  })
  .catch((error) => {
    // handle query errors
  })
```
