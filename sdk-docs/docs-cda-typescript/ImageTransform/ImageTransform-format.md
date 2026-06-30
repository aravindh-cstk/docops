---
title: "format"
description: "The format method lets you convert a given image from one format to another."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-format"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## format

The format method lets you convert a given image from one format to another.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| format | FitByEnum | No | — | Specify the format |

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().format(FormatEnum.PJPG);
const transformURL = url.transform(transformObj);
```
