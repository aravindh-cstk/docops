---
title: "Increase blurriness"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&blur={blur}
url: developers/apis/image-delivery-api/requests/increase-blurriness
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Increase blurriness


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&blur={blur}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| blur | 40 | Enter the blurriness value to be applied to the image, for e.g. 40.  The format of this parameter is: blur={blur_value} |

| environment | production | Enter the environment scoped to your delivery token. |
