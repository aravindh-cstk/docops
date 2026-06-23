---
title: "Convert to AVIF"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}
url: developers/apis/image-delivery-api/requests/convert-to-avif
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Convert to AVIF

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

**WEBP** images are usually lower in size and have good quality. The WEBP images files are currently supported only in Google Chrome, Opera, and Android browsers.

## Query Parameters

- **format** (optional)
  Enter the format into which the source image needs to be converted.
  Default: `avif`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

