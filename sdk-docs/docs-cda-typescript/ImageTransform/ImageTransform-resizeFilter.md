---
title: "resizeFilter"
description: "The resizeFilter method allows you to increase or decrease the number of pixels in a given image."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-resizefilter"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## resizeFilter

The resizeFilter method allows you to increase or decrease the number of pixels in a given image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| type | ResizeFilterEnum | Yes | — | Types of Filter to apply. Values are NEAREST, BILINEAR, BICUBIC, LANCZOS2, LANCZOS3. |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().resize({ width: 500, height: 550 }).resizeFilter(ResizeFilterEnum.NEAREST);
const transformURL = url.transform(transformObj);
```
