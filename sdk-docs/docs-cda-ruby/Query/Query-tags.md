---
title: "tags"
description: "Include tags with which to search entries."
url: "https://www.contentstack.com/ruby-query-tags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## tags

Include tags with which to search entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| tags_array | Array | No | — | Array of tags using which search must be performed |

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.tags(["tag1", "tag2"])
	.fetch;
```
