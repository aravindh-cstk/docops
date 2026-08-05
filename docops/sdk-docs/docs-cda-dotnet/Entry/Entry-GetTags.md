---
title: "GetTags"
description: "Returns tags of this entry."
url: "https://www.contentstack.com/dotnet-entry-gettags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetTags

Returns tags of this entry.

No parameters.

Returns:
Type
object[]

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").Fetch<Entry>();
var tags = entry.GetTags();
```
