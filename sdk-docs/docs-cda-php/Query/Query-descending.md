---
title: "descending"
description: "Sort the results in descending order with the given key."
url: "https://www.contentstack.com/php-query-descending"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## descending

Sort the results in descending order with the given key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uid | string | Yes | — | The key to order by. |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->descending('name')->find();
```
