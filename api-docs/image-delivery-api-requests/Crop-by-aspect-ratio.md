---
title: "Crop by aspect ratio"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}
url: developer-apis/image-delivery-api-requests/crop-by-aspect-ratio
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Crop by aspect ratio

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}`

**Note:** Check out the [limitations](../../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

You can set the X-axis and Y-axis position of the top left corner of the crop by using the query ?crop={width_value},{height_value},x{value},y{value}. This lets you define the starting point of the crop region. The x-axis value and y-axis value can be defined in pixels or percentage. An example of this would be ?crop=300,400,x150,y75 or ?crop=300,400,x0.50,y0.60.

## Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 300 or 0.80 or 250p
  Default: `300`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 400 or 0.90 or 250p
  Default: `400`
- **crop** (optional)
  Enter the width and height of the crop area in aspect ratio. The format of the parameter is: crop={width_value}:{height_value}
  Default: `1:3`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

