---
title: "lessThan"
description: "Query the field which has less value than specified one"
url: "https://www.contentstack.com/php-query-lessthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## lessThan

Query the field which has less value than specified one

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field | string | Yes | — | Field in the entry against which comparison needs to be done. |
| value | string | Yes | — | Value against which comparison is going to happen |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->lessThan('age', 20)->find();
```
