---
title: "LivePreviewQuery"
description: "To add live preview Query for Contentstack preview call"
url: "https://www.contentstack.com/dotnet-contentstackclient-livepreviewquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## LivePreviewQuery

To add live preview Query for Contentstack preview call

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | Dictionary<string, string> | No | — | Query parameter containing hash and content type UID |

Returns:
Type
string

```
using Contentstack.Core; 
using Contentstack.Core.Models;

ContentstackClient stack = new ContentstackClient("api_key", "delivery_token", "environment");
await client.LivePreviewQueryAsync(new System.Collections.Generic.Dictionary<string, string>()
{
	{"live_preview" , "live_preview_hash_from_url_query" },
	{"content_type_uid", "content_type_uid<span>_from_url_query</span>" },
	{"entry_uid", "entry_uid<span>_from_url_query</span>" }
});
```
