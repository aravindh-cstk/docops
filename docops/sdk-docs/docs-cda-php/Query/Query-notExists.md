---
title: "notExists"
description: "Add a constraint that requires, a specified key does not exists in response."
url: "https://www.contentstack.com/php-query-notexists"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notExists

Add a constraint that requires, a specified key does not exists in response.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uid | string | Yes | — | Field uid against the value not existence is checked |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->notExists('age')->find();
```
