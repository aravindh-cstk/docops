---
title: "includeReference"
description: "Add a constraint that requires a particular reference key details."
url: "https://www.contentstack.com/php-query-includereference"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## includeReference

Add a constraint that requires a particular reference key details.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field_uids | array | Yes | — | Array of reference field uids |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->includeReference(array('reference_uid_1', 'reference_uid_2'))->find();
```
