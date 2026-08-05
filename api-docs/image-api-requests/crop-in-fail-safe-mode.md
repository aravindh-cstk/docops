---
title: "Crop in fail-safe mode"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}
url: /crop-in-fail-safe-mode
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.065Z
updated_at: 2025-08-28T13:58:44.936Z
---

# Crop in fail-safe mode

<p>You can also specify the <span data-type="inlineCode">smart</span> parameter to crop a given image using content-aware algorithms. Normal image cropping usually preserves the center of an image while cropping. However, content-aware image cropping returns a cropped image that automatically fits the defined dimensions while intelligently including the most important components of the image. For example, the <span data-type="inlineCode">smart</span> parameter helps focus on a human being’s face while cropping a given image.</p>
<p>Let us try to crop an image using aspect ratio and smart cropping algorithms.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}`

**Method**: `GET`

## Query Parameters

- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>
- **test** (required)
  <p>test</p>
- **width** (optional)
  <p>Enter the value of the image width in pixels or percentage. For example, 300 or 0.80 or 250p</p>
- **height** (optional)
  <p>Enter the value of the image height in pixels or percentage. For example, 400 or 0.90 or 250p</p>
- **crop** (optional)
  <p>Enter the width of the crop area, height of the crop area, top-left corner point of the crop on X-axis, and the top-left corner point of the crop on Y-axis in pixels or percentage. Append the safe parameter to this API request.</p>
<p>The format of the parameter is: <span data-type="inlineCode">crop={width_value},{height_value},x{value},y{value},safe</span></p>

