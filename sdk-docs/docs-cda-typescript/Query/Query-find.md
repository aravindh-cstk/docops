---
title: "find"
description: "The find method retrieves the details of the specified entry."
url: "https://www.contentstack.com/typescript-delivery-query-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

The find method retrieves the details of the specified entry.

No parameters.

Returns:
Type
Promise

**Example:**

```
const result = await stack
                       .contentType("contentType1Uid")
                       .entry()
                       .query()
                       .find<BlogPostEntry>();
```
