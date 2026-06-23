---
title: "Image | Brightness"
description: Use Image Delivery API endpoints for brightness operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/brightness
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Brightness



## Brightness

The brightness parameter allows you to increase or decrease the intensity with which an image reflects or radiates perceived light. To specify brightness for an image, use a whole number (integer) between -100 and 100. You can also define brightness using any decimal number between -100.00 and 100.00.

To increase the value of the brightness parameter of an image, pass a positive value:

### Increase brightness

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

To decrease the value of the brightness parameter of an image, pass a negative value:

#### Query Parameters

- **brightness** (optional)
  Enter the brightness value (1 to 100) to be applied to the image.
  Default: `20`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Decrease brightness

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. The default value for the brightness parameter is 0. This renders the image unchanged.
2. A value of 100 will render an entirely white image.
3. A value of -100 will render an entirely black image.

#### Query Parameters

- **brightness** (optional)
  Enter the brightness value (-100 to -1) to be applied to the image.
  Default: `-20`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

