---
title: "Align overlay"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-align={overlay-align}
url: developers/apis/image-delivery-api/requests/overlay-align
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Align overlay

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-align={overlay-align}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-align** (optional)
  Specify the position of the overlay image. For example {left,bottom}. The format of the parameter is overlay-align={value},{value}.
  Default: `left,bottom`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

