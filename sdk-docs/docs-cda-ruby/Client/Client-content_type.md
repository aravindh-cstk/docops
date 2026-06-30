---
title: "content_type"
description: "Set the content type of which you want to retrieve the entries"
url: "https://www.contentstack.com/ruby-client-content_type"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## content_type

Set the content type of which you want to retrieve the entries

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | string | No | — | UID of the existing content type |

Returns:
Type
Client

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@content_type = @stack.content_type("content_type_uid");
```
