---
title: "RemoveHeader"
description: "Remove header key."
url: "https://www.contentstack.com/dotnet-contentstackclient-removeheader"
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
void

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
stack.RemoveHeader("custom_header_key")
```
