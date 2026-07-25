---
title: "Fit by cropping"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}
url: /fit-by-cropping
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.851Z
updated_at: 2025-08-28T13:58:31.623Z
---

# Fit by cropping

<div class="additional-notes"><h5>Additional Notes</h5><ol><li>The <span data-type='inlineCode'>fit</span> parameter requires both the <span data-type='inlineCode'>height</span> and the <span data-type='inlineCode'>width</span> parameters.</li></ol></div><p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&fit={fit_value}`

**Method**: `GET`

## Query Parameters

- **width** (optional)
  <p>Enter the value of the image width in pixels or percentage. Example 250 or 0.50</p>
- **height** (optional)
  <p>Enter the value of the image height in pixels or percentage. Example 250 or 0.50</p>
- **fit** (optional)
  <p>Enter either bounds or crop as value. Example crop</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

