---
title: "Fit to bounds"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}
url: developers/apis/image-delivery-api/requests/fit-to-bounds
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Fit to bounds


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| height | 0.50 | Enter the value of the image height in pixels or percentage. Example 250 or 0.50 |

| fit | bounds | Enter either bounds or crop as value. Example bounds |

| width | 0.50 | Enter the value of the image width in pixels or percentage. Example 250 or 0.50 |

| environment | production | Enter the environment scoped to your delivery token. |
