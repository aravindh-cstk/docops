---
title: "Auto format"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}
url: developer-apis/image-delivery-api-requests/auto-format
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2026-02-23
---

# Auto format

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

Let’s try converting an image to **GIF** format.

## Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `auto`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

## Headers

- **accept** (optional)
  Enter value image/webp or image/avif. **Note**: The internal server handling this API call does not support AVIF or WEBP formats. Hence this additional header needs to be included to receive the converted image. However, when running this query via Postman or on any browser that supports AVIF or WEBP format, the accept header is not required.
  Default: `image/webp`

