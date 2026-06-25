---
title: "Resize image height"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&height={height_value}
url: developer-apis/image-delivery-api-requests/height
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Resize image height

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&height={height_value}`

##### Additional Notes

1. In case the dimensions specified for the output image is greater than the dimensions of the input image, the image will be upscaled.
2. To disable upscaling, use the disable=upscale parameter.

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **height** (optional)
  Enter the value of the image height in pixels or percentage. Example 100 or 0.90 or 250p
  Default: `100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

