---
title: "setPort"
description: "This function sets Port."
url: "https://www.contentstack.com/php-stack-setport"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setPort

This function sets Port.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| port | string | Yes | — | Port Number |

Returns:
Type
Stack

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$stack->setPort('port');
```
