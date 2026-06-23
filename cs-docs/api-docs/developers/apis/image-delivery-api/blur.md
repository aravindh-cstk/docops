---
title: "Image | Blur"
description: Use Image Delivery API endpoints for blur operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/blur
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Blur



## Blur

The blur parameter allows you to decrease the focus and clarity of a given image. To specify the extent to which you need to increase the blurriness of an image, use any decimal number (float) between 1 and 1000.

To increase the blurriness of an image by 40, use the following query:

### Increase blurriness

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&blur={blur}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **blur** (optional)
  Enter the blurriness value to be applied to the image, for e.g. 40. The format of this parameter is: blur={blur_value}
  Default: `40`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

