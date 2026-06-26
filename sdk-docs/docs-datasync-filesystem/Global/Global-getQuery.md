---
title: "getQuery"
description: "The `getQuery` method returns the query object built with the applied conditions and filters."
url: "https://www.contentstack.com/datasync-filesystem-global-getquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getQuery

The `getQuery` method returns the query object built with the applied conditions and filters.

No parameters.

Returns:
Type
Stack

**Example:**

```
Stack.contentType('example')
 .equalTo('title','Demo')
 .getQuery()
 .find()
```
