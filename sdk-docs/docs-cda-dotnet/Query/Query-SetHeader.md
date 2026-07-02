---
title: "SetHeader"
description: "To set headers for Contentstack rest calls."
url: "https://www.contentstack.com/dotnet-query-setheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## SetHeader

To set headers for Contentstack rest calls.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | header name. |
| value | string | No | — | header value against given header name. |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> collection = await stack.ContentType("content_type_uid").Query().SetHeader("custom_key", "custom_value").Find<Entry>();
```
