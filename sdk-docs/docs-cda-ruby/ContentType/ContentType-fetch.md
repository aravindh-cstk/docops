---
title: "fetch"
description: "A fetch is used to fetch ContentType details for specific UID."
url: "https://www.contentstack.com/ruby-contenttype-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

A fetch is used to fetch ContentType details for specific UID.

No parameters.

Returns:
Type
ContentType

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment"); 
@content_type = @stack.content_type("content_type_uid").fetch;
```
