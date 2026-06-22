---
title: "Convert to JPEG"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}
url: developers/apis/image-delivery-api/requests/convert-formats
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Convert to JPEG


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

A **Progressive JPEG** is an image file created using a compression method that displays higher detail in progression. When a Progressive JPEG image is loaded, it first loads a lower-quality pixelated version, and then gradually increases in quality and detail. Due to this, Progressive JPEG files (or its lower-quality version) loads faster than the baseline JPEG files.

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| format | jpg | Enter the format into which the source image needs to be converted. |

| environment | production | Enter the environment scoped to your delivery token. |
