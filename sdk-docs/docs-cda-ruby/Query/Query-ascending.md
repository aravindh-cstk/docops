---
title: "ascending"
description: "Sort the results in ascending order with the given key. Sort the returned entries in ascending order of the provided key."
url: "https://www.contentstack.com/ruby-query-ascending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ascending

Sort the results in ascending order with the given key. Sort the returned entries in ascending order of the provided key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uid | String | No | — | The key to order by |

Returns:
Type
Query

****

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.ascending("field_uid")
	.fetch;
```
