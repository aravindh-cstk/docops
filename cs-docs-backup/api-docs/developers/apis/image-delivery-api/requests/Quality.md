---
title: "Quality"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&quality={quality_value}
url: developers/apis/image-delivery-api/requests/control-quality
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Quality

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&quality={quality_value}`

##### Additional Notes

1. Lower the value, lower will be the quality of the output image, and vice versa.
2. The quality parameter is not applicable for the image types (GIF and PNG) that are not lossy.
3. When only the quality parameter is specified, and if the output image is larger than the actual image, the original image will be returned.

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **quality** (optional)
  Enter the percentage value (1 to 100) of the compression to be applied on the image.
  Default: `2`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

