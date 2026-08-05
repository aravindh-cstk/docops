---
title: "IncludeBranch"
description: "Include branch for publish content."
url: "https://www.contentstack.com/dotnet-entry-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## IncludeBranch

Include branch for publish content.

No parameters.

Returns:
Type
Entry

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").IncludeBranch().Fetch<Entry>();
```
