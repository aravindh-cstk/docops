---
title: "bgColor"
description: "he bg-color function lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image.."
url: "https://www.contentstack.com/dart-imagetransformation-bgcolor"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## bgColor

he bg-color function lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image..

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| bgColor | String | No | — | It can accept hexadecimal, combination of (Red, Blue, Green) and (Red, Blue, Green, Alpha) |

Returns:
Type
void

```
import contentstack;

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
final imageTransformation = stack.imageTransform(imageUrl).bgBolor('Red')
```
