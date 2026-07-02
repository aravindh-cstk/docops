---
title: "greaterThan"
description: "Query the field which has greater value than specified one"
url: "https://www.contentstack.com/php-query-greaterthan"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## greaterThan

Query the field which has greater value than specified one

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field | string | No | — | Field in the entry against which comparison needs to be done. |
| value | string | Yes | — | Value against which comparison is going to happen |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->greaterThan('age', 20)->find();
```
