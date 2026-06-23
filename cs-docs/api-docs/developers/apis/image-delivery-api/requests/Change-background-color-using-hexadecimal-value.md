---
title: "Change background color using hexadecimal value"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}
url: developers/apis/image-delivery-api/requests/background-color
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Change background color using hexadecimal value

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

The second type is the Red, Blue, Green value which defines the intensity of the corresponding color, with the value ranging anywhere between 0 and 255 for each. An example of this is ?bg-color=140,220,123.

## Query Parameters

- **bg-color** (optional)
  Enter the value for the background color. It should be a 3- or 6-digit hexadecimal value.
  Default: `cccccc`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

