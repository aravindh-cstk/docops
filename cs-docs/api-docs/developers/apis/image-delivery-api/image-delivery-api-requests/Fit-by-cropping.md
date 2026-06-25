---
title: "Fit by cropping"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}
url: developers/apis/image-delivery-api/requests/fit-by-cropping
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Fit by cropping

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}`

##### Additional Notes

1. The fit parameter requires both the height and the width parameters.

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage. Example 250 or 0.50
  Default: `250`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. Example 250 or 0.50
  Default: `250`
- **fit** (optional)
  Enter either bounds or crop as value. Example crop
  Default: `crop`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

