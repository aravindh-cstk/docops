---
title: "Fetch first frame"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.gif?environment={environment_name}&frame={frame_value}
url: developer-apis/image-delivery-api-requests/fetch-first-frame
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Fetch first frame

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.gif?environment={environment_name}&frame={frame_value}`

##### Additional Notes

  

1. The frame parameter only supports animated GIF file format.
2. Currently, the frame parameter can only fetch the first frame from an animated GIF.

**Note:** Check out the [limitations](../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **frame** (optional)
  Enter the frame number to fetched for the animated GIF. You can only fetch the first frame, for e.g. 1. The format of this parameter is: frame={frame_value}
  Default: `1`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

