---
title: "GetContentType"
description: "Get contentType name."
url: "https://www.contentstack.com/dotnet-entry-getcontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetContentType

Get contentType name.

No parameters.

Returns:
Type
string

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
string contentType = stack.ContentType("content_Type_uid").Entry("entry_uid").GetContentType();
```
