---
title: "auto"
description: "The auto method enables the functionality that automates certain image optimization features."
url: "https://www.contentstack.com/typescript-delivery-imagetransform-auto"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## auto

The auto method enables the functionality that automates certain image optimization features.

No parameters.

Returns:
Type
ImageTransform

**Example:**

```
const url = 'www.example.com';
const transformObj = new ImageTransform().auto();

const transformURL = url.transform(transformObj);
```
