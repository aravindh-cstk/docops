---
title: "Assets"
description: "Assets Class to initalize your Assets"
url: "https://www.contentstack.com/php-stack-assets"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## Assets

Assets Class to initalize your Assets

### Overload 1

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| asset_uid | string | Yes | — | valid asset uid relevent to configured stack |

Returns:
Type
Assets

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$assets = $stack->Assets('asset_uid');
```

### Overload 2

No parameters.

Returns:
Type
Assets

```
use Contentstack\Contentstack;

$stack = Contentstack::Stack('api_key', 'delivery_token', 'environment');
$assets = $stack->Assets();
```
