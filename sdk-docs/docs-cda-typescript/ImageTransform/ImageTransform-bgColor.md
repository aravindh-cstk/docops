---
title: "bgColor"
description: "The bgColor method sets a background color for the given image."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-bgcolor"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## bgColor

The bgColor method sets a background color for the given image.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| color | string | Yes | — | Color of the background |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().bgColor('cccccc');

const transformURL = url.transform(transformObj);
```
