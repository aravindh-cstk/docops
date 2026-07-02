---
title: "GetCreateAt"
description: "Get value of creation time of entry."
url: "https://www.contentstack.com/dotnet-entry-getcreateat"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetCreateAt

Get value of creation time of entry.

No parameters.

Returns:
Type
DateTime

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").Fetch<Entry>();
DateTime datetime = entry.GetCreateAt();
```
