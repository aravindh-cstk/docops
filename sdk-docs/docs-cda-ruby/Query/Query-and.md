---
title: "and"
description: "Combines all the queries together using AND operator"
url: "https://www.contentstack.com/ruby-query-and"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## and

Combines all the queries together using AND operator

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
<span>@query2.where("title", "Apparel")</span>

query_array = [@query1, @query2]

@entries = @stack.content_type("content_type_uid").query
	.and(query_array)
	.fetch;
```
