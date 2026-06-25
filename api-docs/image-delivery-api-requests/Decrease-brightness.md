---
title: "Decrease brightness"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}
url: developer-apis/image-delivery-api-requests/decrease-brightness
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Decrease brightness

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}`

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. The default value for the brightness parameter is 0. This renders the image unchanged.
2. A value of 100 will render an entirely white image.
3. A value of -100 will render an entirely black image.

## Query Parameters

- **brightness** (optional)
  Enter the brightness value (-100 to -1) to be applied to the image.
  Default: `-20`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

