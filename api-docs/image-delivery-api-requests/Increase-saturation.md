---
title: "Increase saturation"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&saturation={saturation_value}
url: developer-apis/image-delivery-api-requests/increase-saturation
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Increase saturation

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&saturation={saturation_value}`

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

To decrease the value of the saturation parameter of an image, pass a negative value:

## Query Parameters

- **saturation** (optional)
  Enter the saturation value (1 to 100) to be applied to the image.
  Default: `50`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

