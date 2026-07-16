---
title: "except"
description: "Specifies list of field uids that would be excluded from the response."
url: "https://www.contentstack.com/php-query-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## except

Specifies list of field uids that would be excluded from the response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| level | string | Yes | — | Level for field uid |
| field_uid | array | Yes | — | Field uid which get excluded from the response. |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->except('BASE',array('price'))->find();
```
