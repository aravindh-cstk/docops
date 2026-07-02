---
title: "Exists"
description: "Add a constraint that requires, a specified key exists in response."
url: "https://www.contentstack.com/dotnet-query-exists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Exists

Add a constraint that requires, a specified key exists in response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | The key to be constrained. |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_Type_uid").Query().Exist("title").Find<Entry>();
```
