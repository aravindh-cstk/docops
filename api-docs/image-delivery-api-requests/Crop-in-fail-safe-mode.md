---
title: "Crop in fail-safe mode"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}
url: developer-apis/image-delivery-api-requests/crop-in-fail-safe-mode
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Crop in fail-safe mode

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}`

You can also specify the smart parameter to crop a given image using content-aware algorithms. Normal image cropping usually preserves the center of an image while cropping. However, content-aware image cropping returns a cropped image that automatically fits the defined dimensions while intelligently including the most important components of the image. For example, the smart parameter helps focus on a human being’s face while cropping a given image.

Let us try to crop an image using aspect ratio and smart cropping algorithms.

## Query Parameters

- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`
- **test** (required)
  test
  Default: `test`
- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 300 or 0.80 or 250p
  Default: `300`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 400 or 0.90 or 250p
  Default: `400`
- **crop** (optional)
  Enter the width of the crop area, height of the crop area, top-left corner point of the crop on X-axis, and the top-left corner point of the crop on Y-axis in pixels or percentage. Append the safe parameter to this API request. The format of the parameter is: crop={width_value},{height_value},x{value},y{value},safe
  Default: `300,400,x50,y50,safe`

