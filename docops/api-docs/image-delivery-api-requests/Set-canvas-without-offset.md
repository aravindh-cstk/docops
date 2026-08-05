---
title: "Set canvas without offset"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value},x{value},y{value}
url: developer-apis/image-delivery-api-requests/canvas
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Set canvas without offset

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value},x{value},y{value}`

## Query Parameters

- **canvas** (optional)
  You can pass these values: - width: Enter the width of the canvas in pixels or percentage. - height: Enter the height of the canvas in pixels or percentage. - x{value}: Enter the top-left corner point of the canvas on X-axis in pixels or percentage. - y{value}: Enter the top-left corner point of the canvas on Y-axis in pixels or percentage.
  Default: `650,650,x20,y20`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

