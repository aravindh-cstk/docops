---
title: "language"
description: "To set the language code for entry to fetch"
url: "https://www.contentstack.com/php-entry-language"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## language

To set the language code for entry to fetch

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| locale | string | Yes | — | Language code by default is "en-us" |

Returns:
Type
Entry

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')->language('en-us')->fetch();
```
