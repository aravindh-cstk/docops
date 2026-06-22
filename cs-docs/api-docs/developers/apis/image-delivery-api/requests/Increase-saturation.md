---
title: "Increase saturation"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&saturation={saturation_value}
url: developers/apis/image-delivery-api/requests/increase-saturation
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Increase saturation


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&saturation={saturation_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

To decrease the value of the saturation parameter of an image, pass a negative value:

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| saturation | 50 | Enter the saturation value (1 to 100) to be applied to the image. |

| environment | production | Enter the environment scoped to your delivery token. |
