---
title: "blur(_:)"
description: "The blur parameter allows you to decrease the focus and clarity of a given image."
url: "https://www.contentstack.com/swift-imagetransform-blur-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## blur(_:)

The blur parameter allows you to decrease the focus and clarity of a given image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| blur | UInt | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().blur(10)
let result = urlString.url(with: transform)
```
