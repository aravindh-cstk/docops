---
title: "overlay(relativeUrl:padding:)"
description: "The overlay-pad parameter allows you to add padding pixels to the edges of an overlay image. You need to specify the relative URL of the image as value for this parameter."
url: "https://www.contentstack.com/swift-imagetransform-overlay-relativeurl-padding-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## overlay(relativeUrl:padding:)

The overlay-pad parameter allows you to add padding pixels to the edges of an overlay image. You need to specify the relative URL of the image as value for this parameter.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| relativeUrl | String | Yes | — |  |
| padding | NSEdgeInsets | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let relativeUrl = "<RELATIVE_URL>"
let transform = ImageTransform().overlay(relativeUrl: relativeUrl, padding: NSEdgeInsets(top: 50, left: 20, bottom: 50, right: 20))
let result = urlString.url(with: transform)
```
