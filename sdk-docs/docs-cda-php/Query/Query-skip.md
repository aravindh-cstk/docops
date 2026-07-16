---
title: "skip"
description: "The number of objects to skip before returning any."
url: "https://www.contentstack.com/php-query-skip"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## skip

The number of objects to skip before returning any.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| skip | int | Yes | — | No of objects to skip. |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->skip(20)->find();
```
