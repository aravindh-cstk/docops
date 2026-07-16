---
title: "getQuery"
description: "Get the raw/array query from the current instance of Query/Entry."
url: "https://www.contentstack.com/php-query-getquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getQuery

Get the raw/array query from the current instance of Query/Entry.

No parameters.

Returns:
Type
RawQuery

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');

$_set = ['vivo', 'samsung', 'redmi 3', 'apple'];
$result = $stack->ContentType('content_type_uid')->Query()->containsIn('title', $_set)->getQuery();
```
