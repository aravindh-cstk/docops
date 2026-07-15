---
title: "overlay(relativeUrl:overlayTypes:)"
description: "The overlay parameter allows you to put one image on top of another. You need to specify the relative URL of the image as value for this parameter."
url: "https://www.contentstack.com/swift-imagetransform-overlay-relativeurl-overlaytypes-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## overlay(relativeUrl:overlayTypes:)

The overlay parameter allows you to put one image on top of another. You need to specify the relative URL of the image as value for this parameter.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| relativeUrl | String | Yes | — |  |
| overlayTypes | [OverlayType] | No | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let relativeUrl = "<RELATIVE_URL>"
let transform = ImageTransform().overlay(relativeUrl: relativeUrl, 
                 overlayTypes: [
                    .align(.left),
                    .repeat(.both),
                    .size(Size(width: width, height: height))
                 ]))
let result = urlString.url(with: transform)
```
