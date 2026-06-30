---
title: "resize(_:)"
description: "The width parameter lets you dynamically resize the width of the image by specifying pixels or percentage. The height parameter lets you dynamically resize the height of the image by specifying pixels or percentage. The disable parameter disables the functionality that is enabled by default."
url: "https://www.contentstack.com/swift-imagetransform-resize-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## resize(_:)

The width parameter lets you dynamically resize the width of the image by specifying pixels or percentage. The height parameter lets you dynamically resize the height of the image by specifying pixels or percentage. The disable parameter disables the functionality that is enabled by default.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| resize | Resize | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().resize(Resize(size: Size(width: width)))
let result = urlString.url(with: transform)
```
