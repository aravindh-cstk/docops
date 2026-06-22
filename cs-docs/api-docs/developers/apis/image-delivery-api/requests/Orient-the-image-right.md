---
title: "Orient the image right"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}
url: developers/apis/image-delivery-api/requests/reorient-images
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Orient the image right


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

Now let’s flip the image horizontally.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| orient | 6 | Enter value to manage the cardinal orientation of the image. |

| environment | production | Enter the environment scoped to your delivery token. |
