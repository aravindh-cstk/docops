---
title: "include_content_type"
description: "Include object's content_type in response"
url: "https://www.contentstack.com/ruby-query-include_content_type"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_content_type

Include object's content_type in response

No parameters.

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.include_content_type
	.fetch;
```
