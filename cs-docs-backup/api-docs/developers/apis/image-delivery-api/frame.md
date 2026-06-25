---
title: "Image | Frame"
description: Use Image Delivery API endpoints for frame operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/frame
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Frame



## Frame

The frame parameter fetche the first frame from an animated GIF (Graphics Interchange Format) file that comprises a sequence of moving images.

To extract the first frame from the following animated GIF: {GIF_name}, try the following query:

### Fetch first frame

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.gif?environment={environment_name}&frame={frame_value}`

##### Additional Notes

  

1. The frame parameter only supports animated GIF file format.
2. Currently, the frame parameter can only fetch the first frame from an animated GIF.

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **frame** (optional)
  Enter the frame number to fetched for the animated GIF. You can only fetch the first frame, for e.g. 1. The format of this parameter is: frame={frame_value}
  Default: `1`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

