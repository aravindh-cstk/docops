---
title: "Image | Control Quality"
description: Use Image Delivery API endpoints for control quality operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developer-apis/image-delivery-api/control-quality
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Control Quality



## Quality

The quality parameter lets you control the compression level of images that have Lossy file format. The value for this parameters can be entered in any whole number (taken as a percentage) between 1 and 100. The lower the number, the smaller will be file size and lower quality, and vice versa. If the source image file is not of Lossy file format, this parameter will be ignored.

### Quality

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&quality={quality_value}`

##### Additional Notes

1. Lower the value, lower will be the quality of the output image, and vice versa.
2. The quality parameter is not applicable for the image types (GIF and PNG) that are not lossy.
3. When only the quality parameter is specified, and if the output image is larger than the actual image, the original image will be returned.

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **quality** (optional)
  Enter the percentage value (1 to 100) of the compression to be applied on the image.
  Default: `2`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

