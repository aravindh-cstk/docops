---
title: "GetHTMLText"
description: "Get html text for markdown data type"
url: "https://www.contentstack.com/dotnet-entry-gethtmltext"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetHTMLText

Get html text for markdown data type

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| markdownKey | string | No | — | field_uid as key. |

Returns:
Type
string

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").Fetch<Entry>();
var result = entry.GetHTMLText("markdownKey");
```
