---
title: "SetTags"
description: "Assign a tag(s) for this Entry."
url: "https://www.contentstack.com/dotnet-entry-settags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## SetTags

Assign a tag(s) for this Entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| tags | string[] | No | — | Collection of tags. |

Returns:
Type
Entry

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.Entry("entry_uid").SetTags(new List<string>() {
	"tag_1"
}).Fetch<Entry>();
```
