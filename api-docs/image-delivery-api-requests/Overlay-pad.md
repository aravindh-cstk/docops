---
title: "Overlay pad"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-pad={top_value},{right_value},{bottom_value},{left_value}
url: developer-apis/image-delivery-api-requests/overlay-pad
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Overlay pad

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-pad={top_value},{right_value},{bottom_value},{left_value}`

##### Additional Notes

  

1. By default, the overlay-pad parameter applies padding to the overlay image in white.
2. If the overlay image format supports a transparent background, the padding for the overlay image will be made up of transparent pixels.
3. Values specified using CSS style shorthand are also acceptable.
4. CSS shorthand allows you to specify values for all the edges in one property.

**Note:** Check out the [limitations](../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-pad** (optional)
  Specify padding values for top, right, bottom, and left edges of the overlay image in pixels or percentage.
  Default: `25,50,75,100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

