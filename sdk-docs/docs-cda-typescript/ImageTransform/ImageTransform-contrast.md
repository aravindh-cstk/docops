---
title: "contrast"
description: "The contrast method enables the functionality that automates certain image optimization features."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-contrast"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## contrast

The contrast method enables the functionality that automates certain image optimization features.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| contrastValue | number | Yes | — | Set the contrast of the image between -100 to 100 |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().contrast(-80.99);
const transformURL = url.transform(transformObj);
```
