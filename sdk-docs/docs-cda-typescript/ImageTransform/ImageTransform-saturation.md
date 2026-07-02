---
title: "saturation"
description: "The saturation method allows you to increase or decrease the intensity of the colors in a given image."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-saturation"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## saturation

The saturation method allows you to increase or decrease the intensity of the colors in a given image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| saturationValue | number | Yes | — | To set the saturation of image between -100 to 100 |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().saturation(-80.99);
const transformURL = url.transform(transformObj);
```
