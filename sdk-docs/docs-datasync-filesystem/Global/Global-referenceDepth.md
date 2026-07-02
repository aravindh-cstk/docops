---
title: "referenceDepth"
description: "The referenceDepth method is used alongside .includeReferences() to override the default reference resolution depth of 2 . This allows you to resolve deeply nested references—e.g., if A → B → C → D, all levels down to D will be included in the result."
url: "https://www.contentstack.com/datasync-filesystem-global-referencedepth"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## referenceDepth

The `referenceDepth` method is used alongside `.includeReferences()` to override the default reference resolution depth of **2**. This allows you to resolve deeply nested references—e.g., if A → B → C → D, all levels down to D will be included in the result.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| depth | number | Yes | — | Level of nested references to be fetched |

Returns:
Type
Stack

**Example:**

```
Stack.contentType('blog')
 .entries()
 .includeReferences()
 .referenceDepth(4)
 .find()
```
