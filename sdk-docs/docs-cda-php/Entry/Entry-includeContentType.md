---
title: "includeContentType"
description: "To include content_type along with entries."
url: "https://www.contentstack.com/php-entry-includecontenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeContentType

To include content_type along with entries.

No parameters.

Returns:
Type
Entry

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')->includeContentType()->fetch();
```
