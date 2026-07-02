---
title: "Get"
description: "Get object value for key."
url: "https://www.contentstack.com/dotnet-entry-get"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Get

Get object value for key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | Object | No | — | Key to get value |

Returns:
Type
Object

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").Fetch<Entry>();
Object value = entry.Get("key");
```
