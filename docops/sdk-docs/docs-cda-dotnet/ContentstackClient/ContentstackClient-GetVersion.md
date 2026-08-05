---
title: "GetVersion"
description: "Get url base version"
url: "https://www.contentstack.com/dotnet-contentstackclient-getversion"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetVersion

Get url base version

No parameters.

Returns:
Type
string

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
String url = stack.GetVersion();
```
