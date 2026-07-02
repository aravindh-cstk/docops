---
title: "overlay"
description: "The overlay method lets you place one image over another by specifying the relative URL of the image."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-overlay"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## overlay

The overlay method lets you place one image over another by specifying the relative URL of the image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| relativeURL | string | Yes | — | URL of the image to overlay on base image |
| align | OverlayAlignEnum | No | — | Lets you define the position of the overlay image. Accepted values are TOP, BOTTOM, LEFT, RIGHT, MIDDLE, CENTER |
| repeat | OverlayRepeatEnum | No | — | Lets you define how the overlay image will be repeated on the given image. Accepted values are X, Y, BOTH |
| width | string | number | No | — | Lets you define the width of the overlay image. For pixels, use any whole number between 1 and 8192. For percentages, use any decimal number between 0.0 and 0.99 |
| height | string | number | No | — | Lets you define the height of the overlay image. For pixels, use any whole number between 1 and 8192. For percentages, use any decimal number between 0.0 and 0.99 |
| pad | number | No | — | Lets you add extra pixels to the edges of an image. This is useful if you want to add whitespace or border to an image |

Returns:
Type
ImageTransform

**Example 1:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().overlay({ relativeURL: overlayImgURL });
const transformURL = url.transform(transformObj);
```

**Example 2:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().overlay({ relativeURL: overlayImgURL, align: OverlayAlignEnum.BOTTOM });
const transformURL = url.transform(transformObj);
```

**Example 3:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().overlay({
                       relativeURL: overlayImgURL,
                       align: OverlayAlignEnum.BOTTOM,
                       repeat: OverlayRepeatEnum.Y,
                       width: '50p',
                     });
const transformURL = url.transform(transformObj);
```
