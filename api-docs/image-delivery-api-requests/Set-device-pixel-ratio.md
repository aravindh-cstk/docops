---
title: "Set device pixel ratio"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&dpr={dpr_value}
url: developer-apis/image-delivery-api-requests/device-pixel-ratio
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Set device pixel ratio

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&dpr={dpr_value}`

**Note:** Check out the [limitations](../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **dpr** (optional)
  Enter the device pixel ratio that needs to be applied on the image.
  Default: `2`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `100`
- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

