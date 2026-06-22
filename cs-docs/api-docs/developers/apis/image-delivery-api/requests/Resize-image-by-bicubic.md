---
title: "Resize image by bicubic"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}
url: developers/apis/image-delivery-api/requests/resize-image-by-bicubic
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Resize image by bicubic


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

Let us also try out the lanczos resizing filter to check how it upscales a given image.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| width | 500 | Enter the value of the image width in pixels or percentage. For example, 100 or 0.90 or 250p. |

| height | 550 | Enter the value of the image height in pixels or percentage. For example, 100 or 0.90 or 250p. |

| resize-filter | bicubic | Enter the value for the resizing filter to be used to resize the image.  The format of the parameter is: resize-filter={resize-filter_value} |

| environment | production | Enter the environment scoped to your delivery token. |
