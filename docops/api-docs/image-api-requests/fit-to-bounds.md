---
title: "Fit to bounds"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}
url: /fit-to-bounds
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.769Z
updated_at: 2025-08-28T13:58:28.555Z
---

# Fit to bounds

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}`

**Method**: `GET`

## Query Parameters

- **height** (optional)
  <p>Enter the value of the image height in pixels or percentage. Example 250 or 0.50&nbsp;</p>
- **fit** (optional)
  <p>Enter either bounds or crop as value. Example bounds</p>
- **width** (optional)
  <p>Enter the value of the image width in pixels or percentage. Example 250 or 0.50</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

