---
title: "count"
description: "Retrieve only count of entries in result."
url: "https://www.contentstack.com/ruby-query-count"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## count

Retrieve only count of entries in result.

No parameters.

Returns:
Type
Integer

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@count = @stack.content_type("content_type_uid").query.count;
```
