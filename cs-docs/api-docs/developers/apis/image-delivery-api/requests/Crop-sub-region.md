---
title: "Crop sub region"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}
url: developers/apis/image-delivery-api/requests/crop-images
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Crop sub region

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

You can also set the horizontal and vertical offset of the crop region by using the query ?crop={width_value},{height_value},offset-x{value},offset-y{value}. This lets you define the center point of the crop area. The x-axis offset value and y-axis offset value can be defined only in percentage. An example of this would be ?crop=300,400,offset-x10.5,offset-y10.5.

Offset positioning distributes the remaining space according to the specified offset values or proportions.

For instance, if you crop an image with 2000 pixels width to 1000 pixels wide, an offset value of offset-x10.5 would crop 10% (100 pixels) from the left of the image and 90% (900 pixels) from the right. If you set the offset to 50, the API centers the crop area in the middle of the image.

## Query Parameters

- **crop** (optional)
  Enter the width of the crop area, height of the crop area, top-left corner point of the crop on X-axis, and the top-left corner point of the crop on Y-axis in pixels or percentage. The format of the parameter is {width_value},{height_value},x{value},y{value}.
  Default: `50,75,x0.10,y0.20`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

