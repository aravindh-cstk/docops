---
title: "brightness(_:)"
description: "The brightness parameter allows you to increase or decrease the intensity with which an image reflects or radiates perceived light."
url: "https://www.contentstack.com/swift-imagetransform-brightness-_-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## brightness(_:)

The brightness parameter allows you to increase or decrease the intensity with which an image reflects or radiates perceived light.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | Double | No | — |  |

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().brightness(10)
let result = urlString.url(with: transform)
```
