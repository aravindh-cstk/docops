---
title: "ContentType"
description: "To initialize the ContentType object from where the content will be fetched/retrieved."
url: "https://www.contentstack.com/php-stack-contenttype"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## ContentType

To initialize the ContentType object from where the content will be fetched/retrieved.

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| content_type_uid | string | Yes | — | Valid content type uid relevant to configured stack |

Returns:
Type
ContentType

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$content_type = $stack->ContentType('content_type_uid');
```

### Overload 2

No parameters.

Returns:
Type
ContentType

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$content_types = $stack->ContentType();
```
