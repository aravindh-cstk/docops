---
title: "Add padding"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&pad={top_value},{right_value},{bottom_value},{left_value}
url: developer-apis/image-delivery-api-requests/add-padding
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Add padding

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&pad={top_value},{right_value},{bottom_value},{left_value}`

**Note:** Check out the [limitations](../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

To add a colored border, you need to use the bg-color parameter along with pad. For example, to add a red border, use the query ?pad=10&bg-color=FF0000. Also, note that if the canvas and pad parameters are used together, the pad parameter will be ignored.

## Query Parameters

- **pad** (optional)
  Enter value for top, left, bottom and right edges for which padding needs to be applied
  Default: `25,50,75,100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

