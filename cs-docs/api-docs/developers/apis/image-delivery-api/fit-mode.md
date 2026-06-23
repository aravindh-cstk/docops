---
title: "Image | Fit Mode"
description: Use Image Delivery API endpoints for fit mode operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/fit-mode
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Fit Mode

This parameter enables you to fit the given image properly within the specified height and width. You need to provide values for the height, width and fit parameters. The available values for the fit parameter are bounds, cover and crop.

## Fit to bounds

If fit is set to bounds, it will constrain the given image into the specified height and width.

### Fit to bounds

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **height** (optional)
  Enter the value of the image height in pixels or percentage. Example 250 or 0.50
  Default: `0.50`
- **fit** (optional)
  Enter either bounds or crop as value. Example bounds
  Default: `bounds`
- **width** (optional)
  Enter the value of the image width in pixels or percentage. Example 250 or 0.50
  Default: `0.50`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`




## Fit to cover

If fit is set to cover, it resizes the image (shrinks or enlarges) to fill the entire area defined by the width and height parameters. If the image's aspect ratio differs from the specified dimensions, it will be cropped centrally to fit.

### Fit to cover

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}`

**Note**: The fit parameter requires both the height and the width parameters.

#### Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage. Example 250 or 0.50
  Default: `250`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. Example 250 or 0.50
  Default: `250`
- **fit** (optional)
  Pass the fit value as cover to resize the image to entirely cover the specified region, making one dimension larger if needed.
  Default: `cover`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`




## Fit by cropping

If fit is set to crop, it will crop the given image to the defined height and width.

### Fit by cropping

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}`

##### Additional Notes

1. The fit parameter requires both the height and the width parameters.

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage. Example 250 or 0.50
  Default: `250`
- **height** (optional)
  Enter the value of the image height in pixels or percentage. Example 250 or 0.50
  Default: `250`
- **fit** (optional)
  Enter either bounds or crop as value. Example crop
  Default: `crop`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

