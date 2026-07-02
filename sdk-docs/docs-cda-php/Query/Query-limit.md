---
title: "limit"
description: "A limit on the number of objects to return."
url: "https://www.contentstack.com/php-query-limit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## limit

A limit on the number of objects to return.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| limit | int | Yes | — | No of objects to limit. |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->limit(20)->find();
```
