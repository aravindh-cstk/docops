---
title: "fetch"
description: "Fetch the specified entry"
url: "https://www.contentstack.com/php-entry-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

Fetch the specified entry

No parameters.

Returns:
Type
Result

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')->fetch();
```
