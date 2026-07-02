---
title: "except"
description: "Specifies list of field uids that would be 'excluded' from the response."
url: "https://www.contentstack.com/ruby-query-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## except

Specifies list of field uids that would be 'excluded' from the response.

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fields | Array | No | — | Array of the 'only' reference keys to be excluded in response. |

Returns:
Type
Query

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.except(['title', 'description'])
	.fetch;
```

### Overload 2

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fields | String | No | — | Reference field uid for which fields to be excluded |
| fields_with_base | Array | No | — | Array of the 'only' reference keys to be excluded in response. |

Returns:
Type
Entry

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.except('category', ['title', 'description'])
	.fetch;
```
