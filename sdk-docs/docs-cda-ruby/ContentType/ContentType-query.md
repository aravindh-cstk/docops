---
title: "query"
description: "A query that is used to query for Entry instance."
url: "https://www.contentstack.com/ruby-contenttype-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## query

A query that is used to query for Entry instance.

No parameters.

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment"); 
@query = @stack.content_type("content_type_uid").query;
```
