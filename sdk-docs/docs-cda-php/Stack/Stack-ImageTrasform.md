---
title: "ImageTrasform"
description: "ImageTrasform function is define for image manipulation with different"
url: "https://www.contentstack.com/php-stack-imagetrasform"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## ImageTrasform

ImageTrasform function is define for image manipulation with different

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| url | string | Yes | — | Image url on which we want to manipulate. |
| parameters | object | Yes | — | It is an second parameter in which we want to place different manipulation key and value in array form |

Returns:
Type
string

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$result_url = $stack->ImageTrasform('url', array('quality' => 100));
```
