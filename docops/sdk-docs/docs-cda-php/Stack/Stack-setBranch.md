---
title: "setBranch"
description: "This function sets Branch."
url: "https://www.contentstack.com/php-stack-setbranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## setBranch

This function sets Branch.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| branch | string | Yes | — | Name of branch |

Returns:
Type
Stack

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$stack->setBranch('branch');
```
