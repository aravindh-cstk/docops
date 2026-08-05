---
title: "skip"
description: "The `skip` method skips the specified number of entries from the start of the result set."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## skip

The `skip` method skips the specified number of entries from the start of the result set.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | number | Yes | — | Number of entries to skip |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .skip(10)
  .find()
  .then((result) => {
    // skips the first 10 entries, returns the rest
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
