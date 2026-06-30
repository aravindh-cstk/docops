---
title: "queryReferences"
description: "The `queryReferences` method allows you to perform a query on referenced entries."
url: "https://www.contentstack.com/datasync-filesystem-global-queryreferences"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## queryReferences

The `queryReferences` method allows you to perform a query on referenced entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | Any | Yes | — | Query filter to apply on the referenced entries |

Returns:
Type
Stack

**Example:**

```
Stack.contentType('blog')
 .entries()
 .includeReference() // This would include all references of the content type
 .queryReferences({"authors.name": "John Doe"})
 .find()
```
