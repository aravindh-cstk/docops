---
title: "sharpen"
description: "The sharpen method allows you to increase the definition of the edges of objects in an image."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-sharpen"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## sharpen

The sharpen method allows you to increase the definition of the edges of objects in an image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| amount | number | Yes | — | Specifies the amount of contrast to be set for the image edges between the range [0-10] |
| radius | number | Yes | — | Specifies the radius of the image edges between the range [1-1000] |
| threshold | number | Yes | — | Specifies the range of image edges that need to be ignored while sharpening between the range [0-255] |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().sharpen(5, 1000, 2);
const transformURL = url.transform(transformObj);
```
