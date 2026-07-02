---
title: "GetContentTypes"
description: "This method returns comprehensive information of all the content types of a particular stack in your account."
url: "https://www.contentstack.com/dotnet-contentstackclient-getcontenttypes"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetContentTypes

This method returns comprehensive information of all the content types of a particular stack in your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| param | Dictionary<string, object>  | No | — | dictionary of additional parameter |

Returns:
Type
Task<System.Collections.IList>

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");

var param = new Dictionary<string, object>();
param.Add("include_global_field_schema",true);
param.Add("limit", 10);
param.Add("skip", 10);
param.Add("include_count", "true");
var result = await stack.GetContentTypes(param);
```
