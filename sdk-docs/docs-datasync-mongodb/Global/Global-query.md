---
title: "query"
description: "The `query` method initializes a query builder with the specified raw MongoDB query."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## query

The `query` method initializes a query builder with the specified raw MongoDB query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| userQuery | object | Yes | — | Raw MongoDB query object |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('example')
  .entries()
  .query({ "authors.name": "John Doe" })
  .find()
  .then((result) => {
    // returns entries, whose reference authors.name equals "John Doe"
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
