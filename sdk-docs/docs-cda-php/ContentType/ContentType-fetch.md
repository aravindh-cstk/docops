---
title: "fetch"
description: "Fetch the specific content type"
url: "https://www.contentstack.com/php-contenttype-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetch

Fetch the specific content type

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | object | No | — | Parameters to fetch content |

Returns:
Type
Result

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack-ContentType('content_type_uid')->fetch();
```
