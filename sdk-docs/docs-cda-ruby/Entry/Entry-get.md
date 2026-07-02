---
title: "get"
description: "Get value for field uid"
url: "https://www.contentstack.com/ruby-entry-get"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## get

Get value for field uid

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uids | String | No | — | Field uid for which value to be get. |

Returns:
Type
Object

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entry = @stack.content_type("content_type_uid").entry("entry_uid")
	.include_reference('category')
	.fetch;
@entry.get("field_uid");
```
