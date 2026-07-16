---
title: "setProtocol"
description: "This function sets protocol."
url: "https://www.contentstack.com/php-stack-setprotocol"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setProtocol

This function sets protocol.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| protocol | string | Yes | — | Protocol type |

Returns:
Type
Stack

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$stack->setProtocol('protocol');
```
