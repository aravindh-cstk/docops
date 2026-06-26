---
title: "GetMultipleHTMLText"
description: "Get html text for markdown data type which is multiple true"
url: "https://www.contentstack.com/dotnet-entry-getmultiplehtmltext"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## GetMultipleHTMLText

Get html text for markdown data type which is multiple true

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| markdownKey | string | No | — | F ield_uid as key. |

Returns:
Type
List<string>

```
using Contentstack.Core;
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
Entry entry = await stack.ContentType("content_Type_uid").Entry("entry_uid").Fetch<Entry>();
List<string> metadata = entry.GetMultipleHTMLText("markdown_field_uid");
```
