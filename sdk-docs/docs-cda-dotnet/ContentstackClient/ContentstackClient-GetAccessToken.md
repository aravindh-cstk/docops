---
title: "GetAccessToken"
description: "Get stack access token"
url: "https://www.contentstack.com/dotnet-contentstackclient-getaccesstoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetAccessToken

Get stack access token

No parameters.

Returns:
Type
string

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
String accessToken = stack.GetAccessToken();
```
