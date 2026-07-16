---
title: "Entry"
description: "Represents a Entry. Create Entry Instance."
url: "https://www.contentstack.com/dotnet-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Entry

Represents a Entry. Create Entry Instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entryUid | string | No | — | Set entry uid. |

Returns:
Type
Entry

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = stack.ContentType("content_Type_uid").Entry("entry_uid");
```
