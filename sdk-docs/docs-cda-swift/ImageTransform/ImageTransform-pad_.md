---
title: "pad(_:)"
description: "The pad parameter lets you add extra pixels to the edges of an image. This is useful if you want to add whitespace or border to an image. The value for this parameter can be given in pixels or percentage."
url: "https://www.contentstack.com/swift-imagetransform-pad-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## pad(_:)

The pad parameter lets you add extra pixels to the edges of an image. This is useful if you want to add whitespace or border to an image. The value for this parameter can be given in pixels or percentage.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| padding | NSEdgeInsets | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().pad(NSEdgeInsets(top: 50, left: 20, bottom: 50, right: 20))
let result = urlString.url(with: transform)
```

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().pad(UIEdgeInsets(top: 50, left: 20, bottom: 50, right: 20))
let result = urlString.url(with: transform)
```
