---
title: "GetMetadata"
description: "Get metadata of entry."
url: "https://www.contentstack.com/dotnet-entry-getmetadata"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## GetMetadata

Get metadata of entry.

No parameters.

Returns:
Type
Dictionary<string, object>

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").Fetch<Entry>();
var metadata = entry.GetMetadata();
```
