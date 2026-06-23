---
title: "Resize image by lanczos"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}
url: developers/apis/image-delivery-api/requests/resize-image-by-lanczos
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Resize image by lanczos

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}`

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. You can use the bicubic filter when you need to generate a smaller image with a natural sharpening effect.
2. You can use the bilinear filter when you need to generate a larger image with a natural smoothing effect.
3. You can use the nearest filter to provide a natural pixelation effect while resizing the number of pixels in the given image.
4. You can use the lanczos filter when you need to generate a new image with the best quality. The default value for this filter is lanczos3.

## Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `500`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `550`
- **resize-filter** (optional)
  Enter the value for the resizing filter to be used to resize the image. The format of the parameter is: resize-filter={resize-filter_value}
  Default: `lanczos3`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

