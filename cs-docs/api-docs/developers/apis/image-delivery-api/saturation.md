---
title: "Image | Saturation"
description: Use Image Delivery API endpoints for saturation operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/saturation
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Saturation



## Saturation

The saturation parameter allows you to increase or decrease the intensity of the colors in a given image. To specify the saturation for an image, use a whole number (integer) between -100 and 100. You can also define saturation using any decimal number between -100.00 and 100.00.

To increase the value of the saturation parameter of an image, pass a positive value:

### Increase saturation

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&saturation={saturation_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

To decrease the value of the saturation parameter of an image, pass a negative value:

#### Query Parameters

- **saturation** (optional)
  Enter the saturation value (1 to 100) to be applied to the image.
  Default: `50`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Decrease saturation

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&saturation={saturation_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. The default value for the saturation parameter is 0. This renders an unchanged image.
2. A value of -100 will render a grayscale image.

#### Query Parameters

- **saturation** (optional)
  Enter the saturation value (-100 to -1) to be applied to the image.
  Default: `-30`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

