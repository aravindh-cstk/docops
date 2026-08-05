---
title: "include_fallback"
description: "Include the fallback locale publish content, if specified locale content is not publish."
url: "https://www.contentstack.com/ruby-query-include_fallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include_fallback

Include the fallback locale publish content, if specified locale content is not publish.

No parameters.

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.include_fallback
	.fetch;
```
