---
title: "RemoveHeader"
description: "Remove header key."
url: "https://www.contentstack.com/dotnet-entry-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## RemoveHeader

Remove header key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | key to be remove from header |

Returns:
Type
Entry

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_type_uid").Entry("entry_uid").RemoveHeader("header_to_remove").Fetch();
```
