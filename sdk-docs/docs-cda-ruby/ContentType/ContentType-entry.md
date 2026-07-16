---
title: "entry"
description: "Retrieve a single entry with its UID."
url: "https://www.contentstack.com/ruby-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## entry

Retrieve a single entry with its UID.

No parameters.

Returns:
Type
ContentType

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment"); 
@content_type = @stack.content_type("content_type_uid").fetch;
```
