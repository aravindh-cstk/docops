---
title: "Decrease contrast"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&contrast={contrast_value}
url: developers/apis/image-delivery-api/requests/decrease-contrast
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Decrease contrast


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&contrast={contrast_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. The default value for the contrast parameter is 0. This renders an unchanged image.
2. A value of -100 will render a neutral gray image.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| contrast | -50 | Enter the contrast value (-100 to -1) to be applied to the image. |

| environment | production | Enter the environment scoped to your delivery token. |
