---
title: "includeCount"
description: "The includeCount method retrieves count and data of objects in the result."
url: "https://www.contentstack.com/typescript-delivery-query-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeCount

The includeCount method retrieves count and data of objects in the result.

No parameters.

Returns:
Type
BaseQuery

**Example:**

```
const query = stack.contentType(contentType_uid).entry().query();
const result = await query.includeCount().find<BlogPostEntry>();
```
