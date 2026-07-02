---
title: "Limit"
description: "A limit on the number of objects to return."
url: "https://www.contentstack.com/dotnet-query-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Limit

A limit on the number of objects to return.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| number | string | No | — | No of objects to limit. |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().Limit(20).Find<Entry>();
```
