---
title: "live_preview_query"
description: "For live preview data to be fetched provide query parameter to this function"
url: "https://www.contentstack.com/ruby-client-live_preview_query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## live_preview_query

For live preview data to be fetched provide query parameter to this function

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | object | No | — | Query parameter for live preview contents. |

Returns:
Type
void

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@stack.live_preview_query({
	"live_preview": "live_preview_hash",
	"content_type_uid": "content_type_uid",
	"entry_uid": "entry_uid"
});
```
