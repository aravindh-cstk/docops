---
title: "toJSON"
description: "To transform the Result object to server response content"
url: "https://www.contentstack.com/php-entry-tojson"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## toJSON

To transform the Result object to server response content

No parameters.

Returns:
Type
JSON

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')-toJSON()->fetch();
```
