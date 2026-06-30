---
title: "fetch"
description: "Fetches the latest version of the entries from Contentstack.io content stack"
url: "https://www.contentstack.com/ruby-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

Fetches the latest version of the entries from Contentstack.io content stack

No parameters.

Returns:
Type
Entry

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entry = @stack.content_type("content_type_uid").entry("entry_uid").fetch;
```
