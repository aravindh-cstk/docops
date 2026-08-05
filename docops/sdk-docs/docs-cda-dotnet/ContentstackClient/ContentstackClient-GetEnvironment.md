---
title: "GetEnvironment"
description: "Get stack environment"
url: "https://www.contentstack.com/dotnet-contentstackclient-getenvironment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetEnvironment

Get stack environment

No parameters.

Returns:
Type
string

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
String environment = stack.GetEnvironment();
```
