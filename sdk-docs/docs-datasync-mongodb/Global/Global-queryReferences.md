---
title: "queryReferences"
description: "The `queryReferences` method allows you to perform a query on reference fields that are included using `.includeReferences()` ."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-queryreferences"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## queryReferences

The `queryReferences` method allows you to perform a query on reference fields that are included using `.includeReferences()`.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | object | Yes | — | Query filter for referenced entries |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .includeReferences() // Includes all references of the content type
  .queryReferences({ "authors.name": "John Doe" })
  .find()
```
