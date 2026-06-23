---
title: "Image | Pad"
description: Use Image Delivery API endpoints for pad operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/image-pad
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Pad

This parameter lets you add extra pixels to the edges of an image. This is useful if you want to add whitespace or border to an image. The value for this parameter can be given in pixels or percentage. 

You can specify values for top, right, bottom, and left padding for an image. For example, to add padding to the top edge by 25px, right edge by 50px, bottom edge by 75px and left edge by 100, use the query ?pad=25,50,75,100.

You can also combine two or more values. For example, to add padding to the top edge by 25px, right edge by 50px, bottom edge by 75px and left edge by 50px, use the query ?pad=25,50,75. Similarly, to give padding to the top and bottom edge by 50px, and right and left by 100, use ?pad=50,100. To provide padding on all edges, use ?pad=50.

It is important to note that by default the pad parameter applies white background. If the given image contains transparent background, and the output image also has transparency, then transparent padding will be applied.

## API Endpoints

### Add padding

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&pad={top_value},{right_value},{bottom_value},{left_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

To add a colored border, you need to use the bg-color parameter along with pad. For example, to add a red border, use the query ?pad=10&bg-color=FF0000. Also, note that if the canvas and pad parameters are used together, the pad parameter will be ignored.

#### Query Parameters

- **pad** (optional)
  Enter value for top, left, bottom and right edges for which padding needs to be applied
  Default: `25,50,75,100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Add padding and background color

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&pad={top_value},{right_value},{bottom_value},{left_value}&bg-color={value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. By default, this parameter applies padding in white color.
2. If the given image contains transparent background and the output image also has transparency, then transparent padding will be applied.
3. CSS style shorthand values are also acceptable.
4. If the pad and the canvas parameters are used together in the same request, the pad parameter will be ignored.

#### Query Parameters

- **pad** (optional)
  Enter the values for top, left, bottom and right edges for which padding needs to be applied.
  Default: `25,50,75,100`
- **bg-color** (optional)
  Enter the values for background color for padding.
  Default: `FF0000`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

