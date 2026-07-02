---
title: "only"
description: "Specifies an array of 'only' keys in BASE object that would be 'included' in the response."
url: "https://www.contentstack.com/ruby-query-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## only

Specifies an array of 'only' keys in BASE object that would be 'included' in the response.

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fields | Array | No | — | Array of the 'only' reference keys to be included in response. |

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.only(['title', 'description'])
	.fetch;
```

### Overload 2

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fields | String | No | — | Reference field uid for which fields to be included |
| fields_with_base | Array | No | — | Array of the 'only' reference keys to be included in response. |

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.only('category', ['title', 'description'])
	.fetch;
```
