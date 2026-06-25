---
title: "Smart Crop"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}
url: developers/apis/image-delivery-api/requests/smart-crop
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Smart Crop

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}`

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. The x and y, or offset-x and offset-y parameters are not mandatory.
2. The x and y, or offset-x and offset-y parameters can be used in any order. The only rule is that these parameters should come after the width parameter in the API request.
3. If the x and y, or offset-x and offset-y parameters are not specified, the image will be cropped from the center.
4. The x parameter can be used without y (and vice versa), and the offset-x parameter can be used without offset-y (and vice versa).

## Query Parameters

- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`
- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 300 or 0.80 or 250p
  Default: `300`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 400 or 0.90 or 250p
  Default: `300`
- **crop** (optional)
  Enter the width and height of the crop area in aspect ratio. Append the smart parameter to this API request. The format of the parameter is: crop={width_value}:{height_value},smart
  Default: `3:5,smart`

