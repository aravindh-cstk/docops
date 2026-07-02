---
title: "include_reference"
description: "Add a constraint that requires a particular reference key details."
url: "https://www.contentstack.com/ruby-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## include_reference

Add a constraint that requires a particular reference key details.

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| reference_field_uids | string | No | — | Pass reference field that must be included in the response |

Returns:
Type
Entry

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entry = @stack.content_type("content_type_uid").entry("entry_uid")
	.include_reference('category')
	.fetch;
```

### Overload 2

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| reference_field_uids | Array | No | — | Pass array of reference fields that must be included in the response |

Returns:
Type
Entry

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entry = @stack.content_type("content_type_uid").entry("entry_uid")
	.include_reference(['category', 'review'])
	.fetch;
```
