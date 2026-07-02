---
title: "include_fallback"
description: "Include the fallback locale publish content, if specified locale content is not publish."
url: "https://www.contentstack.com/ruby-entry-include_fallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_fallback

Include the fallback locale publish content, if specified locale content is not publish.

No parameters.

Returns:
Type
Entry

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entry = @stack.content_type("content_type_uid").entry("entry_uid")
	.include_fallback
	.fetch;
```
