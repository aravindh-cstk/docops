---
title: "NotEqualTo"
description: "Add a constraint to the query that requires a particular key's entry to be not equal to the provided value."
url: "https://www.contentstack.com/dotnet-query-notequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## NotEqualTo

Add a constraint to the query that requires a particular key's entry to be not equal to the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | the key to be constrained. |
| value | Object | No | — | The object that must not be equaled. |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().NotEqualTo("title", "Demo").Find<Entry>();
```
