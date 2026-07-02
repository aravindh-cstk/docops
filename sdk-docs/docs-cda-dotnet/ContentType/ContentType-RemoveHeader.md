---
title: "RemoveHeader"
description: "Remove header key."
url: "https://www.contentstack.com/dotnet-contenttype-removeheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## RemoveHeader

Remove header key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | key to be remove from header |

Returns:
Type
ContentType

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentType contentType = await stack.ContentType("content_type_uid").RemoveHeader("header_to_remove");
```
