---
title: "findOne"
description: "The findOne method queries the local database using the built or provided query and returns a single matching entry, asset, or content type object. It processes the data, applies filters, and resolves references before returning the result."
url: "https://www.contentstack.com/datasync-filesystem-global-findone"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## findOne

The `findOne` method queries the local database using the built or provided query and returns a single matching entry, asset, or content type object. It processes the data, applies filters, and resolves references before returning the result.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | object | No | — | A query object that overrides all previously built query conditions |

Returns:
Type
Object

**Example:**

```
Stack.contentType('blog')
 .entries()
 .findOne()
```
