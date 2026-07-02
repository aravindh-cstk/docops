---
title: "except"
description: "To exclude the fields from the result set."
url: "https://www.contentstack.com/php-entry-except"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## except

To exclude the fields from the result set.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| level | string | Yes | — | Level for which field uid to except. Set 'BASE' for top level. |
| field_uids | string | Yes | — | field uids as array |

Returns:
Type
Entry

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')->toJSON()->except('BASE',array('price'))->fetch();
```
