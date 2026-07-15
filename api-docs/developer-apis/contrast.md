---
title: "Image | Contrast"
description: Use Image Delivery API endpoints for contrast operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developer-apis/image-delivery-api/contrast
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Contrast



## Contrast

The contrast parameter allows you to increase or decrease the difference between the darkest and lightest tones in a given image. To specify contrast for an image, use a whole number (integer) between -100 and 100. You can also define contrast using any decimal number between -100.00 and 100.00.

To increase the value of the contrast parameter of an image, pass a positive value:

### Increase contrast

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&contrast={contrast_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

To decrease the value of the contrast parameter of an image, pass a negative value:

#### Query Parameters

- **contrast** (optional)
  Enter the contrast value (1 to 100) to be applied to the image.
  Default: `50`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Decrease contrast

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&contrast={contrast_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. The default value for the contrast parameter is 0. This renders an unchanged image.
2. A value of -100 will render a neutral gray image.

#### Query Parameters

- **contrast** (optional)
  Enter the contrast value (-100 to -1) to be applied to the image.
  Default: `-50`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

