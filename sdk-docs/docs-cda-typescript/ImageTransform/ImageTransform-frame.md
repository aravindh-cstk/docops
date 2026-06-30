---
title: "frame"
description: "The frame method retrieves the first frame from an animated GIF (Graphics Interchange Format) file that comprises a sequence of moving images."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-frame"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## frame

The frame method retrieves the first frame from an animated GIF (Graphics Interchange Format) file that comprises a sequence of moving images.

No parameters.

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().frame();
const transformURL = url.transform(transformObj);
```
