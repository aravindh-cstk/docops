---
title: "includeCount"
description: "The `includeCount` method returns the total count of matching entries along with the result set."
url: "https://www.contentstack.com/datasync-filesystem-global-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeCount

The `includeCount` method returns the total count of matching entries along with the result set.

No parameters.

Returns:
Type
Stack

**Example:**

```
Stack.contentType('example')
 .entries()
 .includeCount()
 .find()
```
