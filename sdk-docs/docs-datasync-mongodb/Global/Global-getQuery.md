---
title: "getQuery"
description: "The getQuery method exposes the query object built using chained query methods."
url: "https://www.contentstack.com/datasync-mongodb-sdk-global-getquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getQuery

The `getQuery` method exposes the query object built using chained query methods.

No parameters.

Returns:
Type
Stack

**Example:**

```
const query = Stack
  .contentType('blog')
  .entries()
  .getQuery();
// exposes details of the queries formed inside the SDK
```
