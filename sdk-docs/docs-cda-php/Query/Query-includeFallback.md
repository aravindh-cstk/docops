---
title: "includeFallback"
description: "Include fallback locale publish content, if specified locale content is not publish."
url: "https://www.contentstack.com/php-query-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeFallback

Include fallback locale publish content, if specified locale content is not publish.

No parameters.

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->includeFallback()->find();
```
