---
title: "Set canvas and offset"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value},offset-x{value},offset-y{value}
url: developer-apis/image-delivery-api-requests/canvas
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Set canvas and offset

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value},offset-x{value},offset-y{value}`

## Query Parameters

- **canvas** (optional)
  Pass the following values: - width: Enter the width of the canvas in pixels or percentage. - height: Enter the height of the canvas in pixels or percentage. - offset-x{value}: Enter the horizontal offset of the canvas in percentage. - offset-y{value}: Enter the vertical offset of the canvas in percentage.
  Default: `600,600,offset-x0.25,offset-y0.75`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

