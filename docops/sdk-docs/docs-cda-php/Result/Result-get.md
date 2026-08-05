---
title: "get"
description: "Get the keys value from the object"
url: "https://www.contentstack.com/php-result-get"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## get

Get the keys value from the object

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — |  |

Returns:
Type
Value

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->sync({'init'=> true});

$json = $result->get('key');
```
