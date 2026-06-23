---
title: "Flip horizontally and orient right"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}
url: developers/apis/image-delivery-api/requests/reorient-images
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Flip horizontally and orient right

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. This parameter can automatically correct the orientation of the image if the source image contains orientation details within its EXIF data (Exchangeable Image File Format).

## Query Parameters

- **orient** (optional)
  Enter value to manage the cardinal orientation of the image.
  Default: `7`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

