---
title: "fetch"
description: "Fetch the specified assets"
url: "https://www.contentstack.com/php-asset-fetch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## fetch

Fetch the specified assets

No parameters.

Returns:
Type
Result

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->Assets('asset_uid')->fetch();
```
