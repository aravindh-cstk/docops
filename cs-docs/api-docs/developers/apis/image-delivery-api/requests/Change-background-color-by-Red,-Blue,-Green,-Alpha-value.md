---
title: "Change background color by Red, Blue, Green, Alpha value"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}
url: developers/apis/image-delivery-api/requests/background-color
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Change background color by Red, Blue, Green, Alpha value


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}`

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| bg-color | 140,220,123,0.5 | Enter the value for the background color. It should be a Red, Blue, Green, Alpha value. |

| environment | production | Enter the environment scoped to your delivery token. |
