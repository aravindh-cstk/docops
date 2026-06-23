---
title: "Repeat overlay horizontally"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-repeat={value}
url: developers/apis/image-delivery-api/requests/overlay-repeat
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Repeat overlay horizontally

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-repeat={value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

Let us now try how the vertical repetition of overlay image works.

## Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-repeat** (optional)
  Enter a value for the repeat pattern of the overlay image. Possible values are x, y, and both.
  Default: `x`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

