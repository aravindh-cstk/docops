---
title: "Canvas by width and height"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value}
url: developers/apis/image-delivery-api/requests/canvas-by-width-and-height
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Canvas by width and height


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

To define the X-axis and Y-axis position of the top left corner of the canvas area, use the query ?canvas={width_value},{height_value},x{value},y{value}. This allows you to define the starting point of the canvas region. The x-axis value and y-axis value can be specified in pixels or percentage. An example of this would be ?canvas=700,800,x150,y75 or ?canvas=700,800,x0.60,y0.50.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| canvas | 700,800 | Enter the width and height of the canvas area in pixels or percentage, respectively.  The format of the parameter is: canvas={width_value},{height_value} |

| environment | production | Enter the environment scoped to your delivery token. |
