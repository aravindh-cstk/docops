---
title: "contrast(_:)"
description: "The contrast parameter allows you to increase or decrease the difference between the darkest and lightest tones in a given image."
url: "https://www.contentstack.com/swift-imagetransform-contrast-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## contrast(_:)

The contrast parameter allows you to increase or decrease the difference between the darkest and lightest tones in a given image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | Double | No | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().contrast(10)
let result = urlString.url(with: transform)
```
