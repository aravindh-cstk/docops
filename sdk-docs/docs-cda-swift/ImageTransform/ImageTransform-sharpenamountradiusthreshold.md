---
title: "sharpen(amount:radius:threshold:)"
description: "The sharpen parameter allows you to increase the definition of the edges of objects in an image."
url: "https://www.contentstack.com/swift-imagetransform-sharpen-amount-radius-threshold-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## sharpen(amount:radius:threshold:)

The sharpen parameter allows you to increase the definition of the edges of objects in an image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| amount | UInt | Yes | — |  |
| radius | UInt | No | — |  |
| threshold | UInt | No | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().sharpen(amount: 11, radius: 2, threshold: 100)
let result = urlString.url(with: transform)
```
