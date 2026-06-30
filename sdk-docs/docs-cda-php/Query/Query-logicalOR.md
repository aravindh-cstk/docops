---
title: "logicalOR"
description: "Combines all the queries together using OR operator"
url: "https://www.contentstack.com/php-query-logicalor"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## logicalOR

Combines all the queries together using OR operator

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| queries | array | Yes | — | Array of Query instances on which OR query executes. |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');

$query1 = $stack->ContentType('content_type_uid_1')->Query()->where('title', 'Redmi Note 3');
$query2 = $stack->ContentType('content_type_uid_1')->Query()->where('color', 'Gold');

$result = $stack->ContentType('content_type_uid')->Query()->logicalOr(array($query1, $query2))->find();
```
