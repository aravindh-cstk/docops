---
title: "Increase brightness"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}
url: developer-apis/image-delivery-api-requests/increase-brightness
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Increase brightness

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}`

**Note:** Check out the [limitations](../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

To decrease the value of the brightness parameter of an image, pass a negative value:

## Query Parameters

- **brightness** (optional)
  Enter the brightness value (1 to 100) to be applied to the image.
  Default: `20`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

