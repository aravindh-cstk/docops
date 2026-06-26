---
title: "Ascending"
description: "Sort the results in ascending order with the given key."
url: "https://www.contentstack.com/dotnet-query-ascending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Ascending

Sort the results in ascending order with the given key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fieldUid | string | No | — | The key to order by. |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().Ascending("name").Find<Entry>();
```
