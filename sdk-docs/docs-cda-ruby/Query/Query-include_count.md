---
title: "include_count"
description: "Retrieve count and data of objects in result."
url: "https://www.contentstack.com/ruby-query-include_count"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include_count

Retrieve count and data of objects in result.

No parameters.

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entry = @stack.content_type("content_type_uid").query
	.include_count
	.fetch;
```
