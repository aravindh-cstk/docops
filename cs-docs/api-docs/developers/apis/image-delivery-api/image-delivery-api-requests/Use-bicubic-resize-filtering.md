---
title: "Use bicubic resize filtering"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&resize-filter={value}
url: developers/apis/image-delivery-api/requests/bicubic
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Use bicubic resize filtering

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&resize-filter={value}`

## Query Parameters

- **resize-filter** (optional)
  Enter the filter that needs to be used for resizing the image.
  Default: `bicubic`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

