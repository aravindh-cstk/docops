---
title: "addQuery"
description: "The addQuery method adds multiple query parameters to the query."
url: "https://www.contentstack.com/typescript-delivery-query-addquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addQuery

The addQuery method adds multiple query parameters to the query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Add filter query key |
| value | string | number | Yes | — | Add the corresponding value to the filter query key |

Returns:
Type
BaseQuery

**Example:**

```
const query = stack.contentType("contentTypeUid").entry().query();
const result = await query
                       .addQuery("query_param_key", "query_param_value")
                       .find<BlogPostEntry>();
```
