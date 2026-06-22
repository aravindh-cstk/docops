---
title: "Fit to cover"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}
url: developers/apis/image-delivery-api/requests/fit-to-cover
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-19
---

# Fit to cover


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}`

**Note**: The fit parameter requires both the height and the width parameters.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| width | 250 | Enter the value of the image width in pixels or percentage. Example 250 or 0.50 |

| height | 250 | Enter the value of the image height in pixels or percentage. Example 250 or 0.50 |

| fit | cover | Pass the fit value as cover to resize the image to entirely cover the specified region, making one dimension larger if needed. |

| environment | production | Enter the environment scoped to your delivery token. |
