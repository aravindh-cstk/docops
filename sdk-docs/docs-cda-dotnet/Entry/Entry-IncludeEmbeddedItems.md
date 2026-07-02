---
title: "IncludeEmbeddedItems"
description: "Include Embedded Objects (Entries and Assets) along with entry/entries details."
url: "https://www.contentstack.com/dotnet-entry-includeembeddeditems"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## IncludeEmbeddedItems

Include Embedded Objects (Entries and Assets) along with entry/entries details.

No parameters.

Returns:
Type
Entry

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").IncludeEmbeddedItems().Fetch<Entry>();
```
