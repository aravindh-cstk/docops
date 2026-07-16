---
title: "excludeReferences"
description: "The `excludeReferences` method excludes all references of the entries being scanned."
url: "https://www.contentstack.com/datasync-filesystem-global-excludereferences"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## excludeReferences

The `excludeReferences` method excludes all references of the entries being scanned.

No parameters.

Returns:
Type
Stack

**Example:**

```
Stack.contentType('example')
 .entries()
 .excludeReferences()
 .find()
 .then((result) => {
   // ‘result’ entries without references
 }).catch((error) => {
   // Handle errors that occur during the query execution
 })
```
