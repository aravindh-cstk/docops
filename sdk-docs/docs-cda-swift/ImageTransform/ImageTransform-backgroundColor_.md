---
title: "backgroundColor(_:)"
description: "The bg-color parameter lets you set a backgroud color for the given image."
url: "https://www.contentstack.com/swift-imagetransform-backgroundcolor-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## backgroundColor(_:)

The bg-color parameter lets you set a backgroud color for the given image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| color | Color | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().backgroundColor(.hex("AAFF00")))
let result = urlString.url(with: transform)
```
