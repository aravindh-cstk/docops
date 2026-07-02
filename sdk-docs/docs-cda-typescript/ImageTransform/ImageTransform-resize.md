---
title: "resize"
description: "The resize method lets you resize the image in terms of width, height, upscaling the image."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-resize"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## resize

The resize method lets you resize the image in terms of width, height, upscaling the image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| width | number | No | — | Specifies the width to resize the image to. The value can be in pixels (for example, 400) or in percentage (for example, 0.60 OR '60p') |
| height | string | number | No | — | Specifies the height to resize the image to.The value can be in pixels (for example, 400) or in percentage (for example, 0.60 OR '60p') |
| disable | string | No | — | The disable parameter disables the functionality that is enabled by default. As of now, there is only one value, i.e., upscale, that you can use with the disable parameter. |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().resize({ width: 200, height: 200, disable: 'upscale' });
const transformURL = url.transform(transformObj);
```
