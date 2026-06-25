---
title: "Image | Canvas"
description: Use Image Delivery API endpoints for canvas operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/canvas
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Canvas



## Canvas

The canvas parameter allows you to increase the size of the canvas that surrounds an image. You can specify the height and width of the canvas area in pixels or percentage or define the height and width of the aspect ratio of the canvas. You can also define the starting point for the canvas area or offset the canvas on its X and Y axis.

You can use the query ?canvas={width_value},{height_value} to set the height and width of the canvas area of the image from the center. The values can be in pixels (for example, ?canvas=700,800) or in percentage (for example, ?canvas=0.70,0.80) or a combination of both (for example, ?canvas=700,0.80).

**Tip**: You can also define the width and height of the canvas area in aspect ratio (for example, ?canvas=2:3).

### Canvas by width and height

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

To define the X-axis and Y-axis position of the top left corner of the canvas area, use the query ?canvas={width_value},{height_value},x{value},y{value}. This allows you to define the starting point of the canvas region. The x-axis value and y-axis value can be specified in pixels or percentage. An example of this would be ?canvas=700,800,x150,y75 or ?canvas=700,800,x0.60,y0.50.

#### Query Parameters

- **canvas** (optional)
  Enter the width and height of the canvas area in pixels or percentage, respectively. The format of the parameter is: canvas={width_value},{height_value}
  Default: `700,800`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Canvas sub region

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={canvas}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

You can set the horizontal and vertical offset of the canvas area by using the query ?canvas={width_value},{height_value},offset-x{value},offset-y{value}. This allows you to define the center point of the canvas area. The x-axis offset value and y-axis offset value can be defined only in percentage. An example of this would be ?canvas=700,800,offset-x0.65,offset-y0.80.

#### Query Parameters

- **canvas** (optional)
  Enter the width of the canvas area, height of the canvas area, top-left corner point of the canvas on X-axis, and the top-left corner point of the canvas on Y-axis in pixels or percentage. The format of the parameter is canvas={width_value},{height_value},x{value},y{value}
  Default: `700,800,x0.50,y0.60`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Canvas and offset

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={canvas}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. By default, the canvas parameter creates a canvas with white background for the output image. For image formats that support transparency, the canvas will display a transparent background.
2. The values defined for the canvas parameter should always be greater than or equal to the image dimensions of the specified image.
3. If the width and height parameters are not provided while specifying an aspect ratio for the canvas, the API request will return the largest area of the the requested aspect ratio as per the dimensions specified for the source image.
4. The x and y, or offset-x and offset-y parameters are optional.
5. The x and y, or offset-x and offset-y parameters can be specified in any order. However, these parameters should follow the width and height parameters in the API request.
6. If the x and y or offset-x and offset-y parameters are not specified, the image will be positioned in the center of the canvas.
7. The x parameter can be used without y (and vice versa), and the offset-x parameter can be used without offset-y (and vice versa).
8. The canvas parameter takes precedence over the pad parameter if both are used in the same request.

#### Query Parameters

- **canvas** (optional)
  Enter the width, height, horizontal offset, vertical offset of the canvas area in pixels or percentage. The format of the parameter is:canvas={width_value},{height_value},offset-x{value},offset-y{value}
  Default: `700,800,offset-x0.65,offset-y0.80`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

