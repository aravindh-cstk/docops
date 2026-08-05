---
title: "Stack"
description: "Static method for the Stack constructor"
url: "https://www.contentstack.com/php-contentstack-stack"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Stack

Static method for the Stack constructor

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| api_key | string | Yes | — | API Key of your stack on Contentstack. |
| access_token | string | Yes | — | Delivery token of your stack on Contentstack. |
| environment | string | Yes | — | Environment from where you want to fetch content. |
| config | array | No | — |  |

Returns:
Type
Stack

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
```
