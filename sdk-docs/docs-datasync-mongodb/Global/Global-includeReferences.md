---
title: "includeReferences"
description: "The includeReferences method includes all the references of your queried entries (default depth 2). Note: To increase the depth of the references fetched, call .referenceDepth(number) ."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-includereferences"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReferences

The `includeReferences` method includes all the references of your queried entries (default depth 2).

**Note:** To increase the depth of the references fetched, call `.referenceDepth(number)`.

No parameters.

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .includeReferences()
  .find()
```
