---
title: "trim(_:)"
description: "The trim parameter lets you trim an image from the edges."
url: "https://www.contentstack.com/swift-imagetransform-trim-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## trim(_:)

The trim parameter lets you trim an image from the edges.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| edgeInset | NSEdgeInsets | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().trim(NSEdgeInsets(top: 50, left: 20, bottom: 50, right: 20))
let result = urlString.url(with: transform)
```
