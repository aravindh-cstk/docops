---
title: "tags"
description: "Include tags with which to search entries."
url: "https://www.contentstack.com/php-query-tags"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## tags

Include tags with which to search entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| tags | array | Yes | — | Array of tags you want to match in the entries |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->tags(array('tag1', 'tag2'))->find();
```
