---
title: "skip"
description: "The number of objects to skip before returning any."
url: "https://www.contentstack.com/ruby-query-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## skip

The number of objects to skip before returning any.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| count | Number | No | 10 | Objects to skip in result set. |

Returns:
Type
Query

****

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.skip(20)
	.fetch;
```
