---
title: "Image | Crop Images"
description: Use Image Delivery API endpoints for crop images operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/crop-images
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Crop Images



## Crop

The crop parameter allows you to remove pixels from an image. You can crop an image by specifying the height and width in pixels or percentage value, or defining height and width in aspect ratio. You can also define a sub region (i.e., define the starting point for crop) before cropping the image, or you can offset the image on its X and Y axis (i.e., define the centre point of the crop) before cropping the image.

When simply cropping an image, use the query ?crop={width_value},{height_value} to crop the image from the center. The value can be in pixels (for example, ?crop=300,400) or in percentage (for example, ?crop=0.50,0.60) or a combination of both (for example, ?crop=300,0.60). Note that for the percentage value, you can also use the p parameter. For example, 100p for 100%.

### Crop by width and height

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

You can define the crop region by means of passing the aspect ratio for the image, for example, ?crop={width}:{height}. So, if you have set an aspect ratio of 1:3 for an image, it means that the image height will be three times the width of the image.

Along with the crop parameter, you also need to specify either the width or height parameter or both in the API request to return an output image with the correct dimensions. If neither width nor height is defined for the given image, the API request will consider the dimensions of the source image and crop the image from the center on the basis of the requested aspect ratio. In this case, the image appears stretched out of proportion.

#### Query Parameters

- **crop** (optional)
  Enter the width and height of the crop area in pixels or percentage, respectively. The format of the parameter is: crop={width_value},{height_value}
  Default: `150,100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Crop by aspect ratio

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

You can set the X-axis and Y-axis position of the top left corner of the crop by using the query ?crop={width_value},{height_value},x{value},y{value}. This lets you define the starting point of the crop region. The x-axis value and y-axis value can be defined in pixels or percentage. An example of this would be ?crop=300,400,x150,y75 or ?crop=300,400,x0.50,y0.60.

#### Query Parameters

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


### Crop sub region

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

You can also set the horizontal and vertical offset of the crop region by using the query ?crop={width_value},{height_value},offset-x{value},offset-y{value}. This lets you define the center point of the crop area. The x-axis offset value and y-axis offset value can be defined only in percentage. An example of this would be ?crop=300,400,offset-x10.5,offset-y10.5.

Offset positioning distributes the remaining space according to the specified offset values or proportions.

For instance, if you crop an image with 2000 pixels width to 1000 pixels wide, an offset value of offset-x10.5 would crop 10% (100 pixels) from the left of the image and 90% (900 pixels) from the right. If you set the offset to 50, the API centers the crop area in the middle of the image.

#### Query Parameters

- **crop** (optional)
  Enter the width of the crop area, height of the crop area, top-left corner point of the crop on X-axis, and the top-left corner point of the crop on Y-axis in pixels or percentage. The format of the parameter is {width_value},{height_value},x{value},y{value}.
  Default: `50,75,x0.10,y0.20`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Crop and offset

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

You can append the safe parameter when cropping an image. This ensures that the output image never returns an error due to the specified crop area being out of bounds. The output image is returned as an intersection of the source image and the defined crop area.

**Note**: When you use the safe parameter, the API request entirely avoids returning an incorrect output image, however the image returned may not match the defined dimensions. Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **crop** (optional)
  Enter the width, height, horizontal offset, and vertical offset of the crop area in pixels or percentage. The format of the parameter is {width_value},{height_value},offset-x{value},offset-y{value}
  Default: `150,100,offset-x10.5,offset-y10.5`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Crop in fail-safe mode

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}`

You can also specify the smart parameter to crop a given image using content-aware algorithms. Normal image cropping usually preserves the center of an image while cropping. However, content-aware image cropping returns a cropped image that automatically fits the defined dimensions while intelligently including the most important components of the image. For example, the smart parameter helps focus on a human being’s face while cropping a given image.

Let us try to crop an image using aspect ratio and smart cropping algorithms.

#### Query Parameters

- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`
- **test** (required)
  test
  Default: `test`
- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 300 or 0.80 or 250p
  Default: `300`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 400 or 0.90 or 250p
  Default: `400`
- **crop** (optional)
  Enter the width of the crop area, height of the crop area, top-left corner point of the crop on X-axis, and the top-left corner point of the crop on Y-axis in pixels or percentage. Append the safe parameter to this API request. The format of the parameter is: crop={width_value},{height_value},x{value},y{value},safe
  Default: `300,400,x50,y50,safe`


### Smart Crop

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. The x and y, or offset-x and offset-y parameters are not mandatory.
2. The x and y, or offset-x and offset-y parameters can be used in any order. The only rule is that these parameters should come after the width parameter in the API request.
3. If the x and y, or offset-x and offset-y parameters are not specified, the image will be cropped from the center.
4. The x parameter can be used without y (and vice versa), and the offset-x parameter can be used without offset-y (and vice versa).

#### Query Parameters

- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`
- **width** (optional)
  Enter the value of the image width in pixels or percentage. For example, 300 or 0.80 or 250p
  Default: `300`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. For example, 400 or 0.90 or 250p
  Default: `300`
- **crop** (optional)
  Enter the width and height of the crop area in aspect ratio. Append the smart parameter to this API request. The format of the parameter is: crop={width_value}:{height_value},smart
  Default: `3:5,smart`

