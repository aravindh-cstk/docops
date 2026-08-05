---
title: "Overlay base64 image"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay-base64={relative_URL}
url: developer-apis/image-delivery-api-requests/overlay
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Overlay base64 image

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay-base64={relative_URL}`

## Query Parameters

- **overlay-base64** (optional)
  Specify the relative URL of the base64 image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

