---
title: "blur"
description: "The blur method allows you to decrease the focus and clarity of a given image."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-blur"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## blur

The blur method allows you to decrease the focus and clarity of a given image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| blurValue | number | Yes | — | Set the blur intensity between 1 to 1000 |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().blur(10);

const transformURL = url.transform(transformObj);
```
