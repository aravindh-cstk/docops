---
title: "SetCachePolicy"
description: "To set cache policy using Query instance."
url: "https://www.contentstack.com/dotnet-query-setcachepolicy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## SetCachePolicy

To set cache policy using Query instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| cachePolicy | CachePolicy | No | — | CachePolicy instance |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_type_uid").Query().SetCachePolicy(CachePolicy.NetworkElseCache).Find<Entry>();
```
