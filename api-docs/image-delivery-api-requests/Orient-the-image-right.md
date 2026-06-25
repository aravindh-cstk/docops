---
title: "Orient the image right"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}
url: developer-apis/image-delivery-api-requests/reorient-images
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Orient the image right

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}`

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

Now let’s flip the image horizontally.

## Query Parameters

- **orient** (optional)
  Enter value to manage the cardinal orientation of the image.
  Default: `6`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

