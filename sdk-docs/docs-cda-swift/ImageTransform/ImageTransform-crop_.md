---
title: "crop(_:)"
description: "The crop parameter allows you to remove pixels from an image."
url: "https://www.contentstack.com/swift-imagetransform-crop-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## crop(_:)

The crop parameter allows you to remove pixels from an image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| crop | Crop | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().crop(.offset(width: 100, height: 100, xOffset: 0.5, yOffset: 0.7))
let result = urlString.url(with: transform)
```
