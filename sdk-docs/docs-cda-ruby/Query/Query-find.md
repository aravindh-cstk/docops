---
title: "find"
description: "Fetches the array of the entries from Contentstack for specific ContentType"
url: "https://www.contentstack.com/ruby-query-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

Fetches the array of the entries from Contentstack for specific ContentType

No parameters.

Returns:
Type
EntryCollection

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query.find;
```
