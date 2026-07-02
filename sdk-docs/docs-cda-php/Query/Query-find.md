---
title: "find"
description: "Get all entries based on the specified subquery"
url: "https://www.contentstack.com/php-query-find"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## find

Get all entries based on the specified subquery

No parameters.

Returns:
Type
Result

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->find();
```
