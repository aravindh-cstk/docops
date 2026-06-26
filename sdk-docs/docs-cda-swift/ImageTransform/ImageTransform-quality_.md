---
title: "quality(_:)"
description: "The quality parameter lets you control the compression level of images that have Lossy file format. The value for this parameters can be entered in any whole number (taken as a percentage) between 1 and 100."
url: "https://www.contentstack.com/swift-imagetransform-quality-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## quality(_:)

The quality parameter lets you control the compression level of images that have Lossy file format. The value for this parameters can be entered in any whole number (taken as a percentage) between 1 and 100.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| quality | UInt | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().quality(10)
let result = urlString.url(with: transform)
```
