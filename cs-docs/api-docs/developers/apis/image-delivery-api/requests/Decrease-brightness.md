---
title: "Decrease brightness"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}
url: developers/apis/image-delivery-api/requests/decrease-brightness
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Decrease brightness


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. The default value for the brightness parameter is 0. This renders the image unchanged.
2. A value of 100 will render an entirely white image.
3. A value of -100 will render an entirely black image.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| brightness | -20 | Enter the brightness value (-100 to -1) to be applied to the image. |

| environment | production | Enter the environment scoped to your delivery token. |
