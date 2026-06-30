---
title: "add_query"
description: "Add a custom query against specified key."
url: "https://www.contentstack.com/ruby-query-add_query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## add_query

Add a custom query against specified key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uid | String | No | — | Field uid to be constraint on |
| value | (String/Number/Boolean/Hash) | No | — | Value for constraint |

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.add_query('author', "Jane Doe")
	.fetch;
```
