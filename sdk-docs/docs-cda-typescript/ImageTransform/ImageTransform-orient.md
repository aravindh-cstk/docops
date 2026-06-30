---
title: "orient"
description: "The orient method allows you to rotate or flip an image in any direction."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-frame"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## orient

The orient method allows you to rotate or flip an image in any direction.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| orientType | FitByEnum | Yes | — | Type of Orientation. Values are DEFAULT, FLIP_HORIZONTAL, FLIP_HORIZONTAL_VERTICAL, FLIP_VERTICAL, FLIP_HORIZONTAL_LEFT, RIGHT, FLIP_HORIZONTAL_RIGHT, LEFT. |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().orient(Orientation.FLIP_HORIZONTAL);

const transformURL = url.transform(transformObj);
```
