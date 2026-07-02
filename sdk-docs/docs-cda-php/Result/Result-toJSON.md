---
title: "toJSON"
description: "To convert result object to json"
url: "https://www.contentstack.com/php-result-tojson"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## toJSON

To convert result object to json

No parameters.

Returns:
Type
json

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->sync({'init'=> true});

$json = $result->toJSON();
```
