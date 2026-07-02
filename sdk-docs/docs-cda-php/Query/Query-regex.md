---
title: "regex"
description: "Add a regular expression constraint for finding string values that match the provided regular expression."
url: "https://www.contentstack.com/php-query-regex"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## regex

Add a regular expression constraint for finding string values that match the provided regular expression.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | string | Yes | — | The key to be constrained. |
| regex | string | Yes | — | The regular expression pattern to match. |
| modifiers | string | No | — | Any of the following supported Regular expression modifiers. use i for case-insensitive matching. use m for making dot match newlines. use x for ignoring whitespace in regex |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->regex('name', '^browser')->find();
```

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->regex('name', '^browser', 'i')->find();
```
