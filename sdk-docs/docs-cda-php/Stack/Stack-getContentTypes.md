---
title: "getContentTypes"
description: "This call returns comprehensive information of all the content types available in a particular stack in your account."
url: "https://www.contentstack.com/php-stack-getcontenttypes"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getContentTypes

This call returns comprehensive information of all the content types available in a particular stack in your account.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | object | No | — | Query params for getting content-type. |

Returns:
Type
object

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->getContentTypes();
```
