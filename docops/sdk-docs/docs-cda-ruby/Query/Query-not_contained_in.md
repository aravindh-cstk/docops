---
title: "not_contained_in"
description: "Add a constraint to the query that requires a particular key entry's value not be contained in the provided array."
url: "https://www.contentstack.com/ruby-query-not_contained_in"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## not_contained_in

Add a constraint to the query that requires a particular key entry's value not be contained in the provided array.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uid | String | No | — | UID of the field for which query should be executed |
| value | (String/Number) | No | — | The possible values for the key's object |

Returns:
Type
Query

**Array Not-equals Operator on field uid**

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.not_contained_in("title", ["Electronics", "Apparel"])
	.fetch;
```

**Array Not-equals Operator Within Modular Blocks**

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.not_contained_in("additional_info.deals.deal_name", ["Electronics", "Apparel"])
	.fetch;
```
