---
title: "Increase sharpness"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&sharpen={sharpen}
url: developers/apis/image-delivery-api/requests/increase-sharpness
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Increase sharpness

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&sharpen={sharpen}`

##### Things to Keep in Mind

  

1. To specify the amount of increase in sharpness, you can use any decimal number (float) between 0 and 10.
2. To specify the radius (size) of the sharpening area, you can use any decimal number (float) between 1 and 1000. You can also use percent style values to define the radius of the sharpening area, for example, 50p.
3. To specify the threshold of the sharpening area, you can use any whole number (integer) between 0 and 255.

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

## Query Parameters

- **sharpen** (optional)
  Enter the value for the amount (for e.g. a5 ) of increase in contrast, the radius (for e.g. r1000) of the image edges to be sharpened, and the threshold (for e.g. t2) range of the image edges that need to be ignored while sharpening. The format of this parameter is: sharpen=a{amount_value},r{radius_value},t{threshold_value}
  Default: `a5,r1000,t2`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

