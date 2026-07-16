---
title: "find"
description: "The `find` method queries the local database using the built or optionally provided query object. It processes the data, applies filters, and resolves references before returning the result."
url: "https://www.contentstack.com/datasync-filesystem-global-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## find

The `find` method queries the local database using the built or optionally provided query object. It processes the data, applies filters, and resolves references before returning the result.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | object | No | — | A query object that overrides all previously built query conditions |

Returns:
Type
Object

**Example:**

```
Stack.contentType('blog').entries().find()
.then((result) => {
   // returns blog content type's entries
})
.catch((error) => {
   // Handle errors that occur during the query execution
})
```
