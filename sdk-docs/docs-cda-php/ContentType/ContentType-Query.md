---
title: "Query"
description: "A query that is used to query for Entry instance."
url: "https://www.contentstack.com/php-contenttype-query"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Query

A query that is used to query for Entry instance.

No parameters.

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$query = $stack-ContentType('content_type_uid')->Query();
```
