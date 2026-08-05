---
title: "Fit to cover"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}
url: /fit-to-cover
product: Contentstack
doc_type: api-request
created_at: 2026-02-19T05:48:11.085Z
updated_at: 2026-02-19T05:48:11.085Z
---

# Fit to cover

<p class="note"><strong>Note</strong>: The <span class="code">fit</span> parameter requires both the <span class="code">height</span> and the <span class="code">width</span> parameters.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}`

**Method**: `GET`

## Query Parameters

- **width** (optional)
  <p>Enter the value of the image width in pixels or percentage. Example 250 or 0.50</p>
- **height** (optional)
  <p>Enter the value of the image height in pixels or percentage. Example 250 or 0.50</p>
- **fit** (optional)
  <p>Pass the <span class="code">fit</span> value as <span class="code">cover</span> to resize the image to entirely cover the specified region, making one dimension larger if needed.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

