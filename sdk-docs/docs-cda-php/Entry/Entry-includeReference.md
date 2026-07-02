---
title: "includeReference"
description: "To include reference(s) of other content type in entries"
url: "https://www.contentstack.com/php-entry-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReference

To include reference(s) of other content type in entries

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uids | array | Yes | — | Array of reference field uids. |

Returns:
Type
Entry

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')->includeReference(array('categories')))->fetch();
```
