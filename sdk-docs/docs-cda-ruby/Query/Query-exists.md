---
title: "exists"
description: "Add a constraint that requires, a specified key exists in response."
url: "https://www.contentstack.com/ruby-query-exists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## exists

Add a constraint that requires, a specified key exists in response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uid | String | No | — | The key to be constrained. |

Returns:
Type
Query

****

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.exists('product_image')
	.fetch;
```
