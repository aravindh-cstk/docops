---
title: "remove_query"
description: "Combines all the queries together using AND operator"
url: "https://www.contentstack.com/ruby-query-remove_query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## remove_query

Combines all the queries together using AND operator

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uid | String | No | — | Field uid to be constraint on |

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.remove_query('author')
	.fetch;
```
