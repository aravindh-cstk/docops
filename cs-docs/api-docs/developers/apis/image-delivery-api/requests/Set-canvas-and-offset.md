---
title: "Set canvas and offset"
description: GET /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value},offset-x{value},offset-y{value}
url: developers/apis/image-delivery-api/requests/canvas
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-08-28
---

# Set canvas and offset


**Method:** `GET`  
**Endpoint:** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value},offset-x{value},offset-y{value}`

**Parameters:**

| Key | Value | Description |
|-----|-------|-------------|

| canvas | 600,600,offset-x0.25,offset-y0.75 | Pass the following values:  - width: Enter the width of the canvas in pixels or percentage. - height: Enter the height of the canvas in pixels or percentage. -  |

| environment | production | Enter the environment scoped to your delivery token. |
