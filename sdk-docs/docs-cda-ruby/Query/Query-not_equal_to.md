---
title: "not_equal_to"
description: "Add a constraint to the query that requires a particular key's entry to be not equal to the provided value."
url: "https://www.contentstack.com/ruby-query-not_equal_to"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## not_equal_to

Add a constraint to the query that requires a particular key's entry to be not equal to the provided value.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uid | String | No | — | UID of the field for which query should be executed |
| value | String | No | — | The object that must not be equaled. |

Returns:
Type
Query

****

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.not_equal_to('title', 'some random title')
	.fetch;
```
