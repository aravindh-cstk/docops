---
title: "Resize"
description: "The width parameter lets you dynamically resize the width of the image by specifying pixels or percentage. The height parameter lets you dynamically resize the height of the image by specifying pixels or percentage. The disable parameter disables the functionality that is enabled by default. See Resize Images."
url: "https://www.contentstack.com/developers/sdks/content-delivery-sdk/swift/reference/resize"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

# Resize

## Resize

The width parameter lets you dynamically resize the width of the image by specifying pixels or percentage. The height parameter lets you dynamically resize the height of the image by specifying pixels or percentage. The disable parameter disables the functionality that is enabled by default. See Resize Images.

## Properties

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| size | Size | No | — | The Size parameter lets you dynamically resize the width and height of the output image by specifying pixels or percentage values. |
| disableUpscale | Bool | No | — | This disableUpscale ensures that even if the specified height or width is much bigger than the actual image, it will not be rendered disproportionately. |
| filter |  ResizeFilter | No | — | The resize-filter parameter allows you to use the r esizing filter to increase or decrease the number of pixels in a given image. |
