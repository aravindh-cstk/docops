---
title: "setDeliveryToken"
description: "This function sets Delivery Token."
url: "https://www.contentstack.com/php-stack-setdeliverytoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setDeliveryToken

This function sets Delivery Token.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| delivery_token | string | Yes | — | Environment specific delivery token |

Returns:
Type
Stack

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$stack->setDeliveryToken('delivery_token');
```
