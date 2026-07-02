---
title: "getHost"
description: "This function returns host."
url: "https://www.contentstack.com/php-stack-gethost"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getHost

This function returns host.

No parameters.

Returns:
Type
string

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$host = $stack->getHost();
```
