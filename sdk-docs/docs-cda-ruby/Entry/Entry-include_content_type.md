---
title: "include_content_type"
description: "Include object's content_type in response"
url: "https://www.contentstack.com/ruby-entry-include_content_type"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include_content_type

Include object's content_type in response

No parameters.

Returns:
Type
Entry

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entry = @stack.content_type("content_type_uid").entry("entry_uid")
	.include_content_type
	.fetch;
```
