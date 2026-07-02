---
title: "less_than_or_equal"
description: "Add a constraint to the query that requires a particular key entry to be less than or equal to the provided value."
url: "https://www.contentstack.com/ruby-query-less_than_or_equal"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## less_than_or_equal

Add a constraint to the query that requires a particular key entry to be less than or equal to the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uid | String | No | — | UID of the field |
| value | (String/Number) | No | — | Value used to match or compare |

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.less_than_or_equal('age', 20)
	.fetch;
```
