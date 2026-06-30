---
title: "Entry"
description: "Entry object to create the \"Query\" on the specified ContentType"
url: "https://www.contentstack.com/php-contenttype-entry"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Entry

Entry object to create the "Query" on the specified ContentType

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| uid | string | Yes | — | Entry uid to get details |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$entry = $stack-ContentType('content_type_uid')->Entry('entry_uid');
```
