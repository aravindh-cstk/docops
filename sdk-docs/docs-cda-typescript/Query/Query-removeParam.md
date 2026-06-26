---
title: "removeParam"
description: "The removeParam method removes a query parameter from the query."
url: "https://www.contentstack.com/typescript-delivery-query-removeparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## removeParam

The removeParam method removes a query parameter from the query.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Specify the param key you want to remove |

Returns:
Type
BaseQuery

**Example:**

```
const query = stack.contentType(contentType_uid).entry().query();
const result = await query
                       .removeParam("query_param_key")
                       .find<BlogPostEntry>();
```
