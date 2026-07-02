---
title: "find_one"
description: "Execute a Query and get the single matching object"
url: "https://www.contentstack.com/ruby-query-find_one"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find_one

Execute a Query and get the single matching object

No parameters.

Returns:
Type
Entry

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query.find_one;
```
