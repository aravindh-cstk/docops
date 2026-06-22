---
title: "Crop in fail-safe mode"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}
url: developers/apis/image-delivery-api/requests/crop-in-fail-safe-mode
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Crop in fail-safe mode


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}`

You can also specify the smart parameter to crop a given image using content-aware algorithms. Normal image cropping usually preserves the center of an image while cropping. However, content-aware image cropping returns a cropped image that automatically fits the defined dimensions while intelligently including the most important components of the image. For example, the smart parameter helps focus on a human being’s face while cropping a given image.

Let us try to crop an image using aspect ratio and smart cropping algorithms.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| environment | production | Enter the environment scoped to your delivery token. |

| test | test | test |

| width | 300 | Enter the value of the image width in pixels or percentage. For example, 300 or 0.80 or 250p |

| height | 400 | Enter the value of the image height in pixels or percentage. For example, 400 or 0.90 or 250p |

| crop | 300,400,x50,y50,safe | Enter the width of the crop area, height of the crop area, top-left corner point of the crop on X-axis, and the top-left corner point of the crop on Y-axis in p |
