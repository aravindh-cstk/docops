---
title: "Convert to WEBP Lossless"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}
url: developers/apis/image-delivery-api/requests/convert-formats
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Convert to WEBP Lossless


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

**Additional Notes**:

1. The quality parameter can used only with JPEG, Progressive JPEG, AVIF, or WEBP (Lossy) image types.
2. The WEBP and AVIF image type is supported only by Google Chrome, Opera, and Android browsers.
3. GIF transcoding is not supported as of now.
4. If 'auto=webp' or 'auto=avif' is used with the format parameter, the browsers that support the WEBP format will ignore the format parameter.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| format | webpll | Enter the format into which the source image needs to be converted. |

| environment | production | Enter the environment scoped to your delivery token. |
