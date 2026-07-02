---
title: "language"
description: "To set the language code in the query"
url: "https://www.contentstack.com/php-query-language"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## language

To set the language code in the query

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| lang | string | Yes | — | Language code to get entries form stack |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->language('en-us')->find();
```
