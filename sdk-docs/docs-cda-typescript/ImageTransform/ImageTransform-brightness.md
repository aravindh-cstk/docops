---
title: "brightness"
description: "The brightness method enables the functionality that automates certain image optimization features."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-brightness"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## brightness

The brightness method enables the functionality that automates certain image optimization features.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| brightnessValue | number | Yes | — | Set the brightness of the image between -100 to 100 |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().brightness(80.50);
const transformURL = url.transform(transformObj);
```
