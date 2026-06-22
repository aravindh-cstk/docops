---
title: "Trim image"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&trim={top_value},{right_value},{bottom_value},{left_value}
url: developers/apis/image-delivery-api/requests/trim-images
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Trim image


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&trim={top_value},{right_value},{bottom_value},{left_value}`

**Additional Notes**
  

- CSS style shorthand values are also acceptable.
- Check out the limitations that are applicable here.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| trim | 25,50,75,100 | Enter value for top, right, bottom, and left edges that needs to be trimmed. |

| environment | production | Enter the environment scoped to your delivery token. |
