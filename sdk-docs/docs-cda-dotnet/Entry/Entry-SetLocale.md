---
title: "SetLocale"
description: "Sets the locale."
url: "https://www.contentstack.com/dotnet-entry-setlocale"
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
Entry

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_type_uid").Entry("entry_uid").SetLocale("en-us").Fetch<Entry>();
```
