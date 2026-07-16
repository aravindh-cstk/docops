---
title: "SetCachePolicy"
description: "To set cache policy using Entry instance."
url: "https://www.contentstack.com/dotnet-entry-setcachepolicy"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## SetCachePolicy

To set cache policy using Entry instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| cachePolicy | CachePolicy | No | — | CachePolicy instance |

Returns:
Type
Entry

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_type_uid").Entry("entry_uid").SetCachePolicy(CachePolicy.NetworkElseCache).Fetch<Entry>();
```
