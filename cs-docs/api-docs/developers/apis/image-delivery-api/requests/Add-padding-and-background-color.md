---
title: "Add padding and background color"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&pad={top_value},{right_value},{bottom_value},{left_value}&bg-color={value}
url: developers/apis/image-delivery-api/requests/add-padding-and-background-color
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Add padding and background color


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&pad={top_value},{right_value},{bottom_value},{left_value}&bg-color={value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. By default, this parameter applies padding in white color.
2. If the given image contains transparent background and the output image also has transparency, then transparent padding will be applied.
3. CSS style shorthand values are also acceptable.
4. If the pad and the canvas parameters are used together in the same request, the pad parameter will be ignored.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| pad | 25,50,75,100 | Enter the values for top, left, bottom and right edges for which padding needs to be applied. |

| bg-color | FF0000 | Enter the values for background color for padding. |

| environment | production | Enter the environment scoped to your delivery token. |
