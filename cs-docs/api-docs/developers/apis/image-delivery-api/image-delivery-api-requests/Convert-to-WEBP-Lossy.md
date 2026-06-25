---
title: "Convert to WEBP Lossy"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}
url: developers/apis/image-delivery-api/requests/convert-formats
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Convert to WEBP Lossy

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

Now let’s convert an image to **WEBP Lossless** format.

## Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `webply`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

