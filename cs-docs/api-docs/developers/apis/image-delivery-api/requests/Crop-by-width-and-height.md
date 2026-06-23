---
title: "Crop by width and height"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}
url: developers/apis/image-delivery-api/requests/crop-images
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Crop by width and height

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}`

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

You can define the crop region by means of passing the aspect ratio for the image, for example, ?crop={width}:{height}. So, if you have set an aspect ratio of 1:3 for an image, it means that the image height will be three times the width of the image.

Along with the crop parameter, you also need to specify either the width or height parameter or both in the API request to return an output image with the correct dimensions. If neither width nor height is defined for the given image, the API request will consider the dimensions of the source image and crop the image from the center on the basis of the requested aspect ratio. In this case, the image appears stretched out of proportion.

## Query Parameters

- **crop** (optional)
  Enter the width and height of the crop area in pixels or percentage, respectively. The format of the parameter is: crop={width_value},{height_value}
  Default: `150,100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

