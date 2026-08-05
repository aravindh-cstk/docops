---
title: "blur"
description: "The blur parameter allows you to decrease the focus and clarity of a given image. To specify the extent to which you need to increase the blurriness of an image, use any decimal number (float) between 1 and 1000."
url: "https://www.contentstack.com/dart-imagetransformation-blur"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## blur

The blur parameter allows you to decrease the focus and clarity of a given image. To specify the extent to which you need to increase the blurriness of an image, use any decimal number (float) between 1 and 1000.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| blur | int | Yes | — | It can accept hexadecimal, combination of (Red, Blue, Green) and (Red, Blue, Green, Alpha) |

Returns:
Type
void

```
import contentstack;

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final imageTransformation = stack.imageTransform(imageUrl).bgBolor('Red')
```
