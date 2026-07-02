---
title: "brightness"
description: "The brightness parameter allows you to increase or decrease the intensity with which an image reflects or radiates perceived ligh."
url: "https://www.contentstack.com/dart-imagetransformation-brightness"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## brightness

The brightness parameter allows you to increase or decrease the intensity with which an image reflects or radiates perceived ligh.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| brightness | int | Yes | — | you can also define brightness using any decimal number |

Returns:
Type
void

```
import contentstack;

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final imageTransformation = stack.imageTransform(imageUrl).brightness(3)
```
