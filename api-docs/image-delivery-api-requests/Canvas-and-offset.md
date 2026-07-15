---
title: "Canvas and offset"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={canvas}
url: developer-apis/image-delivery-api-requests/canvas-and-offset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Canvas and offset

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={canvas}`

**Note:** Check out the [limitations](../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. By default, the canvas parameter creates a canvas with white background for the output image. For image formats that support transparency, the canvas will display a transparent background.
2. The values defined for the canvas parameter should always be greater than or equal to the image dimensions of the specified image.
3. If the width and height parameters are not provided while specifying an aspect ratio for the canvas, the API request will return the largest area of the the requested aspect ratio as per the dimensions specified for the source image.
4. The x and y, or offset-x and offset-y parameters are optional.
5. The x and y, or offset-x and offset-y parameters can be specified in any order. However, these parameters should follow the width and height parameters in the API request.
6. If the x and y or offset-x and offset-y parameters are not specified, the image will be positioned in the center of the canvas.
7. The x parameter can be used without y (and vice versa), and the offset-x parameter can be used without offset-y (and vice versa).
8. The canvas parameter takes precedence over the pad parameter if both are used in the same request.

## Query Parameters

- **canvas** (optional)
  Enter the width, height, horizontal offset, vertical offset of the canvas area in pixels or percentage. The format of the parameter is:canvas={width_value},{height_value},offset-x{value},offset-y{value}
  Default: `700,800,offset-x0.65,offset-y0.80`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

