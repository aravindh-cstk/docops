---
title: "Fit to bounds"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}
url: developer-apis/image-delivery-api-requests/fit-to-bounds
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Fit to bounds

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}`

**Note:** Check out the [limitations](../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **height** (optional)
  Enter the value of the image height in pixels or percentage. Example 250 or 0.50
  Default: `0.50`
- **fit** (optional)
  Enter either bounds or crop as value. Example bounds
  Default: `bounds`
- **width** (optional)
  Enter the value of the image width in pixels or percentage. Example 250 or 0.50
  Default: `0.50`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

