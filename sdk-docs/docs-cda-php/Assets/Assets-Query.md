---
title: "Query"
description: "Query object to create the \"Query\" on Assets"
url: "https://www.contentstack.com/php-asset-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## Query

Query object to create the "Query" on Assets

No parameters.

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->Assets()->Query()->find;
```
