---
title: "Image | Overlay Settings"
description: Use Image Delivery API endpoints for overlay settings operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/overlay-settings
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Overlay Settings



## Overlay

The overlay parameter allows you to put one image on top of another. You need to specify the relative URL of the image as value for this parameter.

### Overlay image

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}`

##### Additional Notes

  

1. By default, the cropping alignment will be middle, center. See overlay-align for more details.

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`




## Overlay Align

The overlay-align parameter lets you define the position of the overlay image. The acceptable values for this parameter are given below:

- top: Align the overlay image to the top of the actual image 
- bottom: Align the overlay image to the bottom of the actual image  
- left: Align the overlay image to the left of the actual image 
- right: Align the overlay image to the right of the actual image 
- middle: Align the overlay image to the middle (vertically) of the actual image  
- center: Align the overlay image to the center (horizontally) of the actual image 

You can also specify two values for this parameter, for example ?overlay-align=left,bottom. By default, the overlay alignment is set to middle,center.

### Align overlay

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-align={overlay-align}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-align** (optional)
  Specify the position of the overlay image. For example {left,bottom}. The format of the parameter is overlay-align={value},{value}.
  Default: `left,bottom`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`




## Overlay Repeat

The overlay-repeat parameter lets you define how the overlay image will be repeated on the given image. The three acceptable values for this parameter are given below:

- x: Horizontal repetition
- y: Vertical repetition
- both: Horizontal and vertical repetition

Let’s use these different parameters to understand how they work. First, try the horizontal repetition of overlay image.

### Repeat overlay horizontally

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-repeat={value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

Let us now try how the vertical repetition of overlay image works.

#### Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-repeat** (optional)
  Enter a value for the repeat pattern of the overlay image. Possible values are x, y, and both.
  Default: `x`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Repeat overlay vertically

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-repeat={value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

Now, let’s see what happens to an image when the vertical as well as horizontal repetition is enabled for the overlay image.

#### Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-repeat** (optional)
  Enter a value for the repeat pattern of the overlay image. Possible values are x, y, and both.
  Default: `y`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Repeat overlay vertically and horizontally

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-repeat={value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-repeat** (optional)
  Enter a value for the repeat pattern of the overlay image. Possible values are x, y, and both.
  Default: `both`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`




## Overlay Width

The overlay-width parameter lets you define the width of the overlay image. The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When height is defined in percentage, it relative to the output image.

In order to set the overlay image width to more than 99%, use the p parameter along with the value, for example, ?overlay-width=300p. If the overlay image width exceeds the width of the image, the overlay image will be cropped.

### Set overlay width

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-width={value}`

##### Additional Notes

  

1. When width is specified in percentage, the width is relative to the output image.
2. To specify a width more than 100% of the original image, use the p parameter. For example, to get a width of 250%, use overlay-width=250p.
3. If the overlay image used is larger than the actual image, the overlay image will be cropped to fit the actual image.

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-width** (optional)
  Specify the width of the overlay image in pixels or percentage.
  Default: `100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`




## Overlay Height

The overlay-height parameter lets you define the height of the overlay image. The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When height is defined in percentage, it relative to the output image.

In order to set the overlay image height to more than 99%, use the p parameter along with the value, for example, ?overlay-height=300p. If the overlay image height exceeds the height of the image, the overlay image will be cropped.

### Set overlay height

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-height={value}`

##### Additional Notes

  

1. When height is specified in percentage, the height is relative to the output image.
2. To specify a height more than 100% of the original image, use the p parameter. For example, to get a height of 250%, use overlay-height=250p.
3. If the overlay image used is larger than the actual image, the overlay image will be cropped to fit the actual image.

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-height** (optional)
  Specify the height of the overlay image in pixels or percentage.
  Default: `150`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

