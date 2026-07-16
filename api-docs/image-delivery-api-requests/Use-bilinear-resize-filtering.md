---
title: "Use bilinear resize filtering"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&resize-filter={value}
url: developer-apis/image-delivery-api-requests/bilinear
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Use bilinear resize filtering

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&resize-filter={value}`

## Query Parameters

- **resize-filter** (optional)
  Enter the filter that needs to be used for resizing the image.
  Default: `bilinear`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

