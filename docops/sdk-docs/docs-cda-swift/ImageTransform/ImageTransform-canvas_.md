---
title: "canvas(_:)"
description: "The canvas parameter allows you to increase the size of the canvas that surrounds an image."
url: "https://www.contentstack.com/swift-imagetransform-canvas-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## canvas(_:)

The canvas parameter allows you to increase the size of the canvas that surrounds an image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| canvas | Canvas | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().canvas(.offset(width: 100, height: 100, xOffset: 0.5, yOffset: 0.7))
let result = urlString.url(with: transform)
```
