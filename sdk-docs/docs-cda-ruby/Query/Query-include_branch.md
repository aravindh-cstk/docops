---
title: "include_branch"
description: "Include the branch for publish content."
url: "https://www.contentstack.com/ruby-query-include_branch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## include_branch

Include the branch for publish content.

No parameters.

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entry = @stack.content_type("content_type_uid").query
	.include_branch
	.fetch;
```
