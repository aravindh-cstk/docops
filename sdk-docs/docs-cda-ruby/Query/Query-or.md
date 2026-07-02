---
title: "or"
description: "Add a constraint to fetch all entries which satisfy any queries."
url: "https://www.contentstack.com/ruby-query-or"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## or

Add a constraint to fetch all entries which satisfy any queries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queries | Array | No | — | Array of instances of the Query class |

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
```

```
@query1 = @stack.content_type("category").query
@query1.where("title", "Apparel")

@query2 = @stack.content_type("category").query
@query2.where("title", "Apparel")

query_array = [@query1, @query2]

@entries = @stack.content_type("content_type_uid").query
	.or(query_array)
	.fetch;
```
