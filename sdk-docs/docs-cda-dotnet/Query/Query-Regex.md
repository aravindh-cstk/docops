---
title: "Regex"
description: "Add a regular expression constraint for finding string values that match the provided regular expression."
url: "https://www.contentstack.com/dotnet-query-regex"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Regex

Add a regular expression constraint for finding string values that match the provided regular expression.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | No | — | The key to be constrained. |
| regex | string | No | — | The regular expression pattern to match. |
| modifiers | string | No | — | Any of the following supported Regular expression modifiers. use i for case-insensitive matching. use m for making dot match newlines. use x for ignoring whitespace in regex |

Returns:
Type
Query

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> entry = await stack.ContentType("content_type_uid").Query().Regex("name", "^browser").Find<Entry>();
```

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
ContentstackCollection<Entry> entry = await stack.ContentType("content_type_uid").Query().Regex("name", "^browser", "i").Find<Entry>();
```
