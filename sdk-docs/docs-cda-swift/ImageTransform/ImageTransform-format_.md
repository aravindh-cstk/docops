---
title: "format(_:)"
description: "The format parameter lets you converts a given image from one format to another."
url: "https://www.contentstack.com/swift-imagetransform-format-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## format(_:)

The format parameter lets you converts a given image from one format to another.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| format | Format | Yes | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().format(Format.gif)
let result = urlString.url(with: transform)
```
