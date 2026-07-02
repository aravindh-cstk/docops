---
title: "referenceDepth"
description: "The referenceDepth method overrides the default reference resolution depth of 2 when using .includeReferences() ."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-referencedepth"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## referenceDepth

The `referenceDepth` method overrides the default reference resolution depth of 2 when using  `.includeReferences()`.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| depth | number | Yes | — | Desired nested reference depth |

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .includeReferences()
  .referenceDepth(4)
  .find()
```
