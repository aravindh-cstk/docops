---
title: "include_embedded_items"
description: "Include Embedded Objects (Entries and Assets) along with entry/entries details."
url: "https://www.contentstack.com/ruby-query-include_embedded_items"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_embedded_items

Include Embedded Objects (Entries and Assets) along with entry/entries details.

No parameters.

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.include_embedded_items
	.fetch;
```
