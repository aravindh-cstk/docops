---
title: "fit"
description: "The fit method enables you to fit the given image properly within the specified height and width."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-fit"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## fit

The fit method enables you to fit the given image properly within the specified height and width.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| type | FitByEnum | No | — | Specifies fit type (Bounds or Crop) |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().resize({ width: 200, height: 200 }).fit(FitByEnum.BOUNDS);
const transformURL = url.transform(transformObj);
```
