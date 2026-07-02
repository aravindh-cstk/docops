---
title: "crop"
description: "The crop method allows you to remove pixels from an image by adjusting the height and width in the percentage value or aspect ratio."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-crop"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## crop

The crop method allows you to remove pixels from an image by adjusting the height and width in the percentage value or aspect ratio.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| cropBy | CropByEnum | No | — | Specify the CropBy type using values DEFAULT, ASPECTRATIO, REGION, or OFFSET. |
| width | string | number | Yes | — | Specify the width to resize the image to. The value can be in pixels (for example, 400) or in percentage (for example, 0.60 OR '60p') |
| height | string | number | Yes | — | Specify the height to resize the image to. The value can be in pixels (for example, 400) or in percentage (for example, 0.60 OR '60p') |
| xval | string | number | Yes | — | For the CropBy Region, specify the X-axis position of the top left corner of the crop. For CropBy Offset, specify the horizontal offset of the crop region. |
| yval | string | number | No | — | For CropBy Region, specify the Y-axis position of the top left corner of the crop. For CropBy Offset, specify the vertical offset of the crop region. |
| safe | boolean | No | — | Ensures that the output image never returns an error due to the specified crop area being out of bounds. The output image is returned as an intersection of the source image and the defined crop area. |
| smart | boolean | No | — | Ensures crop is done using content-aware algorithms. Content-aware image cropping returns a cropped image that automatically fits the defined dimensions while intelligently including the most important components of the image. |

Returns:
Type
ImageTransform

**Example 1:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().crop({ width: 100, height: 200 });

const transformURL = url.transform(transformObj);
```

**Example 2:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().crop({ width: 2, height: 3, cropBy: CropByEnum.ASPECTRATIO });

const transformURL = url.transform(transformObj);
```

**Example 3:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().crop({ width: 200, height: 300, cropBy: CropByEnum.REGION, xval: 100, yval: 150 });
const transformURL = url.transform(transformObj);
```

**Example 4:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().crop({ width: 200, height: 300, cropBy: CropByEnum.OFFSET, xval: 100, yval: 150 });

const transformURL = url.transform(transformObj);
```
