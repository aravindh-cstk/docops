---
title: "RemoveQuery"
description: "Remove provided query key from custom query if exist."
url: "https://www.contentstack.com/dotnet-query-removequery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## RemoveQuery

Remove provided query key from custom query if exist.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | Query name to remove. |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_type_uid").Query().RemoveQuery("query_key").Find<Entry>();
```
