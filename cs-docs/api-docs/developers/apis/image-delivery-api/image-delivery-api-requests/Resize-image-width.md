---
title: "Resize image width"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}
url: developers/apis/image-delivery-api/requests/width
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Resize image width

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}`

##### Additional Notes

1. In case the dimensions specified for the output image is greater than the dimensions of the input image, the image will be upscaled.
2. To disable upscaling, use the disable=upscale parameter.

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage. For Example 100 or 0.90 or 250p.
  Default: `100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

