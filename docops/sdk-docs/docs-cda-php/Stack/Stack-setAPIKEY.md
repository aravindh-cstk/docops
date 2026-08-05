---
title: "setAPIKEY"
description: "This function sets API Key."
url: "https://www.contentstack.com/php-stack-setapikey"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setAPIKEY

This function sets API Key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| api_key | string | Yes | — | Stack API key |

Returns:
Type
void

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$stack->setAPIKEY('api_key');
```
