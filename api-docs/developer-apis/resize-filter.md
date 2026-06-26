---
title: "Image | Resize-filter"
description: Use Image Delivery API endpoints for resize-filter operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developer-apis/image-delivery-api/resize-filter
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Resize-filter



## Resize-filter

The resize-filter parameter allows you to use the resizing filter to increase or decrease the number of pixels in a given image. This parameter resizes the given image without adding or removing any data from it.

The following values are acceptable for the resize-filter parameter:

- nearest: Utilizes the values of the neighboring translated pixels to provide smoother and quick resizing of a given image.
- bilinear: Utilizes a 2x2 environment of pixels on an average. This filter blends new interpolated pixels with the original image pixels to generate a larger image with more detail.
- bicubic: Utilizes a 4x4 environment of pixels on average. This filter maintains the innermost pixels and discards all the extra details from a given image.
- lanczos2: Enhances the ability to identify linear features and object edges of a given image. This filter uses the sinc resampling function to reconstruct the pixelation of an image and improve its quality.
- lanczos3: Utilizes a better approximation of the sinc resampling function to generate an image with better reconstruction.

You can use the ?resize-filter={resize_filter_value} query to resize an image through the resizing filter. Let us look at some examples to understand how we can use the resize-filter parameter.

**Warning**: If you only specify the resize-filter parameter, the API request will simply return the original image. You need to also specify either the width or height parameter in the API request to ensure that the resize-filter parameter is not ignored.

Use the ?resize-filter=nearest query to generate an image using the nearest resizing filter.

### Resize image by nearest

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

Try the following query to see how the bilinear resizing filter works.

#### Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `500`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `550`
- **resize-filter** (optional)
  Enter the value for the resizing filter to be used to resize the image. The format of the parameter is: resize-filter={resize-filter_value}
  Default: `nearest`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Resize image by bilinear

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

Try the following query to see what happens to the given image when we use the bicubic resizing filter.

#### Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `500`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `550`
- **resize-filter** (optional)
  Enter the value for the resizing filter to be used to resize the image. The format of the parameter is: resize-filter={resize-filter_value}
  Default: `bilinear`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Resize image by bicubic

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

Let us also try out the lanczos resizing filter to check how it upscales a given image.

#### Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `500`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `550`
- **resize-filter** (optional)
  Enter the value for the resizing filter to be used to resize the image. The format of the parameter is: resize-filter={resize-filter_value}
  Default: `bicubic`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Resize image by lanczos

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. You can use the bicubic filter when you need to generate a smaller image with a natural sharpening effect.
2. You can use the bilinear filter when you need to generate a larger image with a natural smoothing effect.
3. You can use the nearest filter to provide a natural pixelation effect while resizing the number of pixels in the given image.
4. You can use the lanczos filter when you need to generate a new image with the best quality. The default value for this filter is lanczos3.

#### Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `500`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 100 or 0.90 or 250p.
  Default: `550`
- **resize-filter** (optional)
  Enter the value for the resizing filter to be used to resize the image. The format of the parameter is: resize-filter={resize-filter_value}
  Default: `lanczos3`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

