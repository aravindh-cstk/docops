---
title: "Canvas sub region"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={canvas}
url: developer-apis/image-delivery-api-requests/canvas-sub-region
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Canvas sub region

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={canvas}`

**Note:** Check out the [limitations](../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

You can set the horizontal and vertical offset of the canvas area by using the query ?canvas={width_value},{height_value},offset-x{value},offset-y{value}. This allows you to define the center point of the canvas area. The x-axis offset value and y-axis offset value can be defined only in percentage. An example of this would be ?canvas=700,800,offset-x0.65,offset-y0.80.

## Query Parameters

- **canvas** (optional)
  Enter the width of the canvas area, height of the canvas area, top-left corner point of the canvas on X-axis, and the top-left corner point of the canvas on Y-axis in pixels or percentage. The format of the parameter is canvas={width_value},{height_value},x{value},y{value}
  Default: `700,800,x0.50,y0.60`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

