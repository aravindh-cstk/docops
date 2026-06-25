---
title: "Crop and offset"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}
url: developers/apis/image-delivery-api/requests/crop-images
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Crop and offset

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}`

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

You can append the safe parameter when cropping an image. This ensures that the output image never returns an error due to the specified crop area being out of bounds. The output image is returned as an intersection of the source image and the defined crop area.

**Note**: When you use the safe parameter, the API request entirely avoids returning an incorrect output image, however the image returned may not match the defined dimensions. Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **crop** (optional)
  Enter the width, height, horizontal offset, and vertical offset of the crop area in pixels or percentage. The format of the parameter is {width_value},{height_value},offset-x{value},offset-y{value}
  Default: `150,100,offset-x10.5,offset-y10.5`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

