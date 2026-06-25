---
title: "Trim image"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&trim={top_value},{right_value},{bottom_value},{left_value}
url: developers/apis/image-delivery-api/requests/trim-images
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Trim image

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&trim={top_value},{right_value},{bottom_value},{left_value}`

**Additional Notes**
  

- CSS style shorthand values are also acceptable.
- Check out the limitations that are applicable here.

## Query Parameters

- **trim** (optional)
  Enter value for top, right, bottom, and left edges that needs to be trimmed.
  Default: `25,50,75,100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

