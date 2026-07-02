---
title: "quality"
description: "The quality method lets you control the compression level of images that have lossy file format."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-quality"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## quality

The quality method lets you control the compression level of images that have lossy file format.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| qualityNum | number | Yes | — | Quality range: 1 - 100 |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().quality(50);
const transformURL = url.transform(transformObj);
```
