---
title: "saturation(_:)"
description: "The saturation parameter allows you to increase or decrease the intensity of the colors in a given image."
url: "https://www.contentstack.com/swift-imagetransform-saturation-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## saturation(_:)

The saturation parameter allows you to increase or decrease the intensity of the colors in a given image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | Double | No | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().saturation(10)
let result = urlString.url(with: transform)
```
