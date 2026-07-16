---
title: "fetchFirstFrame() "
description: "The frame parameter fetches the first frame from an animated GIF (Graphics Interchange Format) file that comprises a sequence of moving images."
url: "https://www.contentstack.com/swift-imagetransform-fetchfirstframe-"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fetchFirstFrame() 

The frame parameter fetches the first frame from an animated GIF (Graphics Interchange Format) file that comprises a sequence of moving images.

No parameters.

Returns:
Type
ImageTransform

```
let urlString = "<IMAGE_URL_TO_TRANSFORM>"
let transform = ImageTransform().fetchFirstFrame()
let result = urlString.url(with: transform)
```
