---
title: "limit"
description: "The limit method restricts the number of entries returned by the query."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## limit

The `limit` method restricts the number of entries returned by the query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | number | Yes | — | Maximum number of results to return |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .limit(5)
  .find()
  .then((result) => {
    // returns top 5 entries of 'example' content type
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
