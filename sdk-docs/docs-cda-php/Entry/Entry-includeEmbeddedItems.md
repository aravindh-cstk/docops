---
title: "includeEmbeddedItems"
description: "To include Embedded Items along with entries and asset."
url: "https://www.contentstack.com/php-entry-includefallback"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeEmbeddedItems

To include Embedded Items along with entries and asset.

No parameters.

Returns:
Type
Entry

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')->includeEmbeddedItems()->fetch();
```
