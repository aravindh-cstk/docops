---
title: "dpr"
description: "The dpr method lets you deliver images with appropriate size to devices that come with a defined device pixel ratio."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-dpr"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## dpr

The dpr method lets you deliver images with appropriate size to devices that come with a defined device pixel ratio.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| dprValue | number | No | — | Specify the device pixel ratio. The value should range between 1-10000 or 0.0 to 9999.999 |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().resize({ width: 300, height: 500 }).dpr(10);
const transformURL = url.transform(transformObj);
```
