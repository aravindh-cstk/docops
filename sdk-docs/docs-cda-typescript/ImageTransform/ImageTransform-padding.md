---
title: "padding"
description: "The padding method lets you add extra pixels to the edges of an image's border or add whitespace."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-padding"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## padding

The padding method lets you add extra pixels to the edges of an image's border or add  whitespace.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| padding | number | Yes | — | padding value in pixels or percentages |

Returns:
Type
ImageTransform

**Example 1:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().padding([25, 50, 75, 90]);
const transformURL = url.transform(transformObj);
```

**Example 2:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().padding(50);
const transformURL = url.transform(transformObj);
```
