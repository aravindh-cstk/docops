---
title: "where"
description: "Add a constraint to fetch all entries that contains given value against specified key."
url: "https://www.contentstack.com/ruby-query-where"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## where

Add a constraint to fetch all entries that contains given value against specified key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query_hash | Hash | No | — | Query hash for equal condition |

Returns:
Type
Query

****

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.where({:author => "Jane Doe"})
	.fetch;
```
