---
title: "ResizeFilter"
description: "The resize-filter parameter allows you to use the resizing filter to increase or decrease the number of pixels in a given image."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/resizefilter"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# ResizeFilter

## ResizeFilter

The resize-filter parameter allows you to use the resizing filter to increase or decrease the number of pixels in a given image.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| none | ResizeFilter | No | — | Default to none allow not to set Resize-filter |
| nearest | ResizeFilter | No | — | Utilizes the values of the neighbouring translated pixels to provide smoother and quick resizing of a given image. |
| bilinare | ResizeFilter | No | — | Utilizes a 2x2 environment of pixels on an average. This filter blends new interpolated pixels with the original image pixels to generate a larger image with more detail. |
| bicubic | ResizeFilter | No | — | Utilizes a 4x4 environment of pixels on average. This filter maintains the innermost pixels and discards all the extra details from a given image. |
| lanczos2 | ResizeFilter | No | — | Enhances the ability to identify linear features and object edges of a given image. This filter uses the sinc resampling function to reconstruct the pixelation of an image and improve its quality. |
| lanczos3 | ResizeFilter | No | — | Enhances the ability to identify linear features and object edges of a given image. This filter uses the since resampling function to reconstruct the pixelation of an image and improve its quality. |
