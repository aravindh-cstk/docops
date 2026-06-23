---
title: "Image | Background Color"
description: Use Image Delivery API endpoints for background color operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/background-color
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Background Color

The bg-color parameter lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image. There are three possible types of values for this parameter. 

The first type is the 3- or 6-digit hexadecimal value, for example ?bg-color=cccccc.

## API Endpoints

### Change background color using hexadecimal value

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

The second type is the Red, Blue, Green value which defines the intensity of the corresponding color, with the value ranging anywhere between 0 and 255 for each. An example of this is ?bg-color=140,220,123.

#### Query Parameters

- **bg-color** (optional)
  Enter the value for the background color. It should be a 3- or 6-digit hexadecimal value.
  Default: `cccccc`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Change background color by Red, Blue, Green value

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

And the last type is the Red, Blue, Green, Alpha value, which is an extension of the second type with an addition of the alpha element. The alpha value defines the transparency, with 0.0 being fully transparent and 1.0 being completely opaque. An example of this is ?bg-color=140,220,123,0.5.

#### Query Parameters

- **bg-color** (optional)
  Enter the value for the background color. It should be a Red, Blue, Green value.
  Default: `140,220,123`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Change background color by Red, Blue, Green, Alpha value

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **bg-color** (optional)
  Enter the value for the background color. It should be a Red, Blue, Green, Alpha value.
  Default: `140,220,123,0.5`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

