---
title: "addQuery"
description: "Add Query is used to add the raw/array query to filter the entries."
url: "https://www.contentstack.com/php-query-addquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addQuery

Add Query is used to add the raw/array query to filter the entries.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| query | array | Yes | — | Array formatted query |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');

$_set = ['vivo', 'samsung', 'redmi 3', 'apple'];
$query1 = $stack->ContentType('content_type_uid_1')->Query()->containsIn('title', $_set)->getQuery();

$result = $stack->ContentType('content_type_uid')->Query()->addQuery($query1)->find();
```
