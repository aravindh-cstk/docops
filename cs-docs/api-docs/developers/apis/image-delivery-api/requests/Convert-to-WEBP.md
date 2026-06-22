---
title: "Convert to WEBP"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}
url: developers/apis/image-delivery-api/requests/convert-formats
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Convert to WEBP


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

WEBP images are of two types: Lossy and Lossless. In the former, the data lost while compression cannot be reversed, hence the quality can be lower. While with the later format, no data is lost while compression and quality remains the same even after compression. 

Let’s try converting to **WEBP Lossy** first.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| format | webp | Enter the format into which the source image needs to be converted. |

| environment | production | Enter the environment scoped to your delivery token. |
