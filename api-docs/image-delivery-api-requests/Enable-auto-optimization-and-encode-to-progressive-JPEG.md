---
title: "Enable auto optimization and encode to progressive JPEG"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}&auto={auto}
url: developer-apis/image-delivery-api-requests/automate-optimization
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Enable auto optimization and encode to progressive JPEG

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}&auto={auto}`

##### Additional Notes

1. WEBP and AVIF formats are not supported by all browsers.
2. If the format parameter is used with this parameter, the format parameter will be ignored in browsers that support WEBP and AVIF formats.

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **auto** (optional)
  Enter value for auto optimization of the image. It can either be webp or avif.
  Default: `webp`
- **format** (optional)
  Enter the format that the image needs to be converted to for browsers that don’t support WEBP or AVIF.
  Default: `pjpg`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

