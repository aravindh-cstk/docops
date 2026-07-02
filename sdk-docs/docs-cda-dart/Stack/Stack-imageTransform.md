---
title: "imageTransform"
description: "The Image Delivery API is used to retrieve, manipulate and/or convert image files of your Contentstack account and deliver it to your web or mobile properties."
url: "https://www.contentstack.com/dart-stack-imagetransform"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## imageTransform

The Image Delivery API is used to retrieve, manipulate and/or convert image files of your Contentstack account and deliver it to your web or mobile properties.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| imageUrl | String | Yes | — | Base Image Url of the image you want to manipulate |

Returns:
Type
ImageTransformation

```
import Contentstack

final stack = contentstack.Stack("apiKey", "deliveryToken", "environment");
var image = stack.imageTransform("imageUrl")                                                                         </span>
```
