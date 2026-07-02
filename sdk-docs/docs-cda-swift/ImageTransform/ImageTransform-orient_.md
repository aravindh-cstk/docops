---
title: "orient(_:)"
description: "The orient parameter lets you control the cardinal orientation of the given image."
url: "https://www.contentstack.com/swift-imagetransform-orient-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## orient(_:)

The orient parameter lets you control the cardinal orientation of the given image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| orient | Orientation | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().orient(.default)
let result = urlString.url(with: transform)
```
