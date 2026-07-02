---
title: "AddQuery"
description: "Add a custom query against specified key."
url: "https://www.contentstack.com/dotnet-query-addquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## AddQuery

Add a custom query against specified key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | field uid. |
| value | string | No | — | field value |

Returns:
Type
Query

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().AddQuery("key", "value").Find<Entry>();
```
