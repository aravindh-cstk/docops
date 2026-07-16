---
title: "excludeReferences"
description: "The `excludeReferences` method excludes all references of the entries being returned. Note: On calling this, referenced entries and assets will not be included in the result."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-excludereferences"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## excludeReferences

The `excludeReferences` method excludes all references of the entries being returned.

**Note:** On calling this, referenced entries and assets will not be included in the result.

No parameters.

Returns:
Type
Stack

**Example:**

```
Stack
  .contentType('blog')
  .entries()
  .excludeReferences()
  .find()
  .then((result) => {
    // returns entries, without any of its assets or references
  })
  .catch((error) => {
    // Handle errors that occur during the query execution
  })
```
