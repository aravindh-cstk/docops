---
title: "Fetch"
description: "This method returns the complete information, of a specific content type."
url: "https://www.contentstack.com/dotnet-contenttype-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Fetch

This method returns the complete information, of a specific content type.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param | Dictionary<Object> | No | — | Dictionary of additional parameter |

Returns:
Type
Task<Newtonsoft.Json.Linq.JObject>

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
var param = new Dictionary<string, object>();
param.Add("include_global_field_schema",true);
var result = await stack.ContentType("content_Type_uid").Fetch(param);
```
