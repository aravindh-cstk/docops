---
title: "includeBranch"
description: "Include branch for publish content."
url: "https://www.contentstack.com/php-query-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

Include branch for publish content.

No parameters.

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->includeBranch()->find();
```
