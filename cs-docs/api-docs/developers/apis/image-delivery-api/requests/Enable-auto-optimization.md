---
title: "Enable auto optimization"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&auto={auto_value}
url: developers/apis/image-delivery-api/requests/automate-optimization
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Enable auto optimization


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&auto={auto_value}`

WebP and AVIF images are not supported by all browsers. If the auto parameter is used along with the format parameter, the former overrides the latter in browsers that support WebP and AVIF formats. In browsers that do not support WebP or AVIF format, the format parameter will be applied.

Let's try enabling the auto parameter along with the format parameter, for browsers that do not support WebP or AVIF formats, and encode them to progressive JPEG.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| accept | image/webp | Enter value image/webp or image/avif depending on the value of auto parameter.  **Note**: The internal server handling this API call does not support AVIF or WE |

| auto | webp | Enter value for auto optimization of the image. |

| environment | production | Enter the environment scoped to your delivery token. |
