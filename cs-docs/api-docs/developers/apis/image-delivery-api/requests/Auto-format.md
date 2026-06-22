---
title: "Auto format"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}
url: developers/apis/image-delivery-api/requests/auto-format
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-23
---

# Auto format


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

Let’s try converting an image to **GIF** format.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| accept | image/webp | Enter value image/webp or image/avif.  **Note**: The internal server handling this API call does not support AVIF or WEBP formats. Hence this additional header  |

| format | auto | Enter the format into which the source image needs to be converted. |

| environment | production | Enter the environment scoped to your delivery token. |
