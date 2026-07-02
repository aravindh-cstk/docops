---
title: "trim"
description: "The trim method lets you trim an image from the edges."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-trim"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## trim

The trim method lets you trim an image from the edges.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| trimValue | number | number[] | Yes | — | Specifies values for top, right, bottom, and left edges of an image. |

Returns:
Type
ImageTransform

**Example 1:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().trim([25, 50, 75, 90]);
const transformURL = url.transform(transformObj);
```

**Example 2:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().trim([25, 50, 25]);
const transformURL = url.transform(transformObj);
```

**Example 3:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().trim(50);
const transformURL = url.transform(transformObj);
```
