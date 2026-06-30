---
title: "includeReferenceContentTypeUID"
description: "This method includes the content type UIDs of the referenced entries returned in the response."
url: "https://www.contentstack.com/php-entry-includereferencecontenttypeuid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## includeReferenceContentTypeUID

This method includes the content type UIDs of the referenced entries returned in the response.

No parameters.

Returns:
Type
Entry

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Entry('entry_uid')->includeReferenceContentTypeUID()->fetch();
```
