---
title: "canvas"
description: "The canvas method allows you to increase the size of the canvas that surrounds an image."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-canvas"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## canvas

The canvas method allows you to increase the size of the canvas that surrounds an image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| canvasBy | CanvasByEnum | No | — | Specifies what params to use for creating canvas - DEFAULT, ASPECTRATIO, REGION, OFFSET |
| height | string | number | Yes | — | Sets height of the canvas |
| width | string | number | Yes | — | Sets width of the canvas |
| xval | string | number | No | — | Defines the X-axis position of the top left corner or horizontal offset |
| yval | string | number | No | — | Defines the Y-axis position of the top left corner or vertical offset |

Returns:
Type
ImageTransform

**Example 1:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().canvas({ width: 100, height: 200 });
const transformURL = url.transform(transformObj);
```

**Example 2:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().canvas({ width: 200, height: 300, canvasBy: CanvasByEnum.OFFSET, xval: 100, yval: 150 });
const transformURL = url.transform(transformObj);
```
