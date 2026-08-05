---
title: "greaterThanEqualTo"
description: "Query the field which has greater or equal value than specified one."
url: "https://www.contentstack.com/php-query-greaterthanequalto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## greaterThanEqualTo

Query the field which has greater or equal value than specified one.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field | string | Yes | — | Field in the entry against which comparision needs to be done |
| value | string | Yes | — | Value against which comparision is going to happen |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->greaterThanEqualTo('age', 20)->find();
```
