---
title: "regex"
description: "Add a regular expression constraint for finding string values that match the provided regular expression. This may be slow for large data sets. Example:"
url: "https://www.contentstack.com/ruby-query-regex"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## regex

Add a regular expression constraint for finding string values that match the provided regular expression. This may be slow for large data sets. Example:

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uid | string | No | — | The key to be constrained. |
| pattern | String | No | — | The regular expression pattern to match. |
| options | String | No | — | Regex options |

Returns:
Type
Query

****

```
require "contentstack";

@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.regex('title', '.*Mobile.*')
	.fetch;
```

```
require "contentstack";
@stack = Contentstack::Client.new("api_key", "delivery_token", "environment");
@entries = @stack.content_type("content_type_uid").query
	.regex('title', '.*Mobile.*', 'i')
	.fetch;
```
