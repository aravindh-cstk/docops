---
title: "GetApplicationKey"
description: "Get stack application key"
url: "https://www.contentstack.com/dotnet-contentstackclient-getapplicationkey"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetApplicationKey

Get stack application key

No parameters.

Returns:
Type
string

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
String apiKey = stack.GetApplicationKey();
```
