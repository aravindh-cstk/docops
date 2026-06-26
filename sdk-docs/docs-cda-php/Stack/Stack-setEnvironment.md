---
title: "setEnvironment"
description: "This function sets environment name."
url: "https://www.contentstack.com/php-stack-setenvironment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setEnvironment

This function sets environment name.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| environment | string | Yes | — | Name of Environment |

Returns:
Type
Stack

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$stack->setEnvironment('environment');
```
