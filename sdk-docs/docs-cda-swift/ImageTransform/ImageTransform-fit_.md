---
title: "fit(_:)"
description: "The fit parameter enables you to fit the given image properly within the specified height and width. You need to provide values for the height, width and fit parameters."
url: "https://www.contentstack.com/swift-imagetransform-fit-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fit(_:)

The fit parameter enables you to fit the given image properly within the specified height and width. You need to provide values for the height, width and fit parameters.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| fit | Fit | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().fit(.bounds(Size(width: 100, height: 100)))
let result = urlString.url(with: transform)
```
