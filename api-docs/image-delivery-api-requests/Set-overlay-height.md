---
title: "Set overlay height"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-height={value}
url: developer-apis/image-delivery-api-requests/overlay-height
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Set overlay height

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-height={value}`

##### Additional Notes

  

1. When height is specified in percentage, the height is relative to the output image.
2. To specify a height more than 100% of the original image, use the p parameter. For example, to get a height of 250%, use overlay-height=250p.
3. If the overlay image used is larger than the actual image, the overlay image will be cropped to fit the actual image.

**Note:** Check out the [limitations](../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-height** (optional)
  Specify the height of the overlay image in pixels or percentage.
  Default: `150`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

