---
title: "addParam"
description: "To add query parameter in query"
url: "https://www.contentstack.com/php-query-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

To add query parameter in query

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | Name of key in string |
| value | string | Yes | — | Value of the key in string |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->addParam('include_count', 'true')->find();
```
