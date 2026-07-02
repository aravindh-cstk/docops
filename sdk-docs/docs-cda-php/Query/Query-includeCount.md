---
title: "includeCount"
description: "Retrieve count and data of objects in result."
url: "https://www.contentstack.com/php-query-includecount"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeCount

Retrieve count and data of objects in result.

No parameters.

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->includeCount()->find();
```
