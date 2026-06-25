---
title: "Change background color by Red, Blue, Green value"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}
url: developers/apis/image-delivery-api/requests/background-color
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Change background color by Red, Blue, Green value

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}`

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

And the last type is the Red, Blue, Green, Alpha value, which is an extension of the second type with an addition of the alpha element. The alpha value defines the transparency, with 0.0 being fully transparent and 1.0 being completely opaque. An example of this is ?bg-color=140,220,123,0.5.

## Query Parameters

- **bg-color** (optional)
  Enter the value for the background color. It should be a Red, Blue, Green value.
  Default: `140,220,123`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

