---
title: "auto()"
description: "The auto parameter lets you enable the functionality that automates certain image optimization features."
url: "https://www.contentstack.com/swift-imagetransform-auto-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## auto()

The auto parameter lets you enable the functionality that automates certain image optimization features.

No parameters.

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().auto()
let result = urlString.url(with: transform)
```
