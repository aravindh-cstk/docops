---
title: "setHost"
description: "To set the host on stack object"
url: "https://www.contentstack.com/php-stack-sethost"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setHost

To set the host on stack object

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| host | string | Yes | — | Host name/ipaddress from where the content to be fetched |

Returns:
Type
Stack

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$stack->setHost('host');
```
