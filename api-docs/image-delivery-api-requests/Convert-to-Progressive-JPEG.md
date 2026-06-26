---
title: "Convert to Progressive JPEG"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}
url: developer-apis/image-delivery-api-requests/convert-formats
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Convert to Progressive JPEG

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

**AVIF** images provide better compression and quality.

## Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `pjpg`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

