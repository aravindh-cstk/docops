---
title: "notContainedIn"
description: "Query the field value other than the given set of values"
url: "https://www.contentstack.com/php-query-notcontainedin"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## notContainedIn

Query the field value other than the given set of values

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| field | string | Yes | — | Field in the entry against which comparison needs to be done. |
| value | string | Yes | — | Array value against which comparison is going to happen |

Returns:
Type
Query

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result = $stack->ContentType('content_type_uid')->Query()->notContainedIn("field_uid", ["Christmas Deal", "Summer Deal"])->find();
```
