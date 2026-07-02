---
title: "DeliveryToken"
description: "This function returns Delivery Token."
url: "https://www.contentstack.com/php-stack-deliverytoken"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## DeliveryToken

This function returns Delivery Token.

No parameters.

Returns:
Type
string

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$token = $stack->DeliveryToken();
```
