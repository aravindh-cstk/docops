---
title: "Repeat overlay vertically"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-repeat={value}
url: developer-apis/image-delivery-api-requests/overlay-repeat
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Repeat overlay vertically

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-repeat={value}`

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

Now, let’s see what happens to an image when the vertical as well as horizontal repetition is enabled for the overlay image.

## Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-repeat** (optional)
  Enter a value for the repeat pattern of the overlay image. Possible values are x, y, and both.
  Default: `y`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

