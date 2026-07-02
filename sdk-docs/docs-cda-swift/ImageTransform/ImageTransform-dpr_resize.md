---
title: "dpr(_:resize:)"
description: "The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio."
url: "https://www.contentstack.com/swift-imagetransform-dpr-_-resize-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## dpr(_:resize:)

The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| dpr | UInt | Yes | — |  |
| resize | Resize | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().dpr(1000, resize: Resize(size: Size(width: 320))))
let result = urlString.url(with: transform)
```
