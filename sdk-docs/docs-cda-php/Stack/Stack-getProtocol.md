---
title: "getProtocol"
description: "This function return protocol type."
url: "https://www.contentstack.com/php-stack-getprotocol"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getProtocol

This function return protocol type.

No parameters.

Returns:
Type
string

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$protocol = $stack->getProtocol();
```
