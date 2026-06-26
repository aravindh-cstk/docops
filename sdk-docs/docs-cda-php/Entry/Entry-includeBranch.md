---
title: "includeBranch"
description: "To include branch of publish content."
url: "https://www.contentstack.com/php-entry-includebranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeBranch

To include branch of publish content.

No parameters.

Returns:
Type
Entry

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')->includeBranch()->fetch();
```
