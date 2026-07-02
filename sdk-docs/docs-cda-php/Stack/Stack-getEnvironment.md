---
title: "getEnvironment"
description: "This function returns environment name."
url: "https://www.contentstack.com/php-stack-getenvironment"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getEnvironment

This function returns environment name.

No parameters.

Returns:
Type
string

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$environment = $stack->getEnvironment();
```
