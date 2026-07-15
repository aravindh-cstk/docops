---
title: "LivePreviewQuery"
description: "To set live preview token and content type uid."
url: "https://www.contentstack.com/php-stack-livepreviewquery"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## LivePreviewQuery

To set live preview token and content type uid.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| parameters | object | Yes | — | Set live preview token and content type uid. |

Returns:
Type
void

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$stack->LivePreviewQuery(array('live_preview'=> 'token', 'content_type_uid'=? 'content_type_uid', 'entry_uid'=> 'entry_uid'));
```
