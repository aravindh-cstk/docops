---
title: "SetUid"
description: "Assigns a uid to current instance of an entry."
url: "https://www.contentstack.com/dotnet-entry-setuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## SetUid

Assigns a uid to current instance of an entry.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | No | — | Uid for entry to fetch |

Returns:
Type
Entry

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.Entry().SetUid("entry_uid").SetLocale("en-us").Fetch<Entry>();
```
