---
title: "only"
description: "To project the fields in the result set"
url: "https://www.contentstack.com/php-entry-only"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## only

To project the fields in the result set

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| level | string | Yes | — | Level for which field uid to include. Set 'BASE' for top level. |
| field_uids | string | Yes | — | field uids as array |

Returns:
Type
Entry

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')->toJSON()->only('BASE',array('price'))->fetch();
```
