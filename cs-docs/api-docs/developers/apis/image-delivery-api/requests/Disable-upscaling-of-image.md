---
title: "Disable upscaling of image"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={value}&disable={value}
url: developers/apis/image-delivery-api/requests/disable
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Disable upscaling of image

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={value}&disable={value}`

To see this parameter in action, the height or width (or both) parameter should be used with it.

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **width** (optional)
  Enter the value of the image width in pixels or percentage  For Example 100 or 0.90 or 250p
  Default: `650`
- **disable** (optional)
  Enter the name of the functionality that you want to disable.
  Default: `upscale`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

