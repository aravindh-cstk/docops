---
title: "LessThanOrEqualTo"
description: "Add a constraint to the query that requires a particular key entry to be less than or equal to the provided value."
url: "https://www.contentstack.com/dotnet-query-lessthanorequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## LessThanOrEqualTo

Add a constraint to the query that requires a particular key entry to be less than or equal to the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | the key to be constrained. |
| value | Object | No | — | The value that provides an upper bound or equal . |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().LessThanOrEqualTo("age", 20).Find<Entry>();
```
