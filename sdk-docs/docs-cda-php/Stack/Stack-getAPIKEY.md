---
title: "getAPIKEY"
description: "This function returns API Key."
url: "https://www.contentstack.com/php-stack-getapikey"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getAPIKEY

This function returns API Key.

No parameters.

Returns:
Type
string

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$api_key = $stack->getAPIKEY();
```
