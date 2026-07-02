---
title: "locale"
description: "Get entries from the specified locale."
url: "https://www.contentstack.com/ruby-query-locale"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## locale

Get entries from the specified locale.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| code | String | No | — | The locale code of the entry |

Returns:
Type
Query

****

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.locale("en-us")
	.fetch;
```
