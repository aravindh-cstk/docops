---
title: "SetLocale"
description: "Sets the locale."
url: "https://www.contentstack.com/dotnet-query-setlocale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## SetLocale

Sets the locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| Locale | string | No | — | Locale to fetch entry |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_type_uid").Query().SetLocale("en-us").Find<Entry>();
```
