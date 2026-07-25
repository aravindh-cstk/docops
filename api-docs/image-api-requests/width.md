---
title: "Resize image width"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}
url: /width
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.968Z
updated_at: 2025-08-28T13:58:26.468Z
---

# Resize image width

<div class="additional-notes"><h5>Additional Notes</h5><ol><li>In case the dimensions specified for the output image is greater than the dimensions of the input image, the image will be upscaled.</li><li>To disable upscaling, use the disable=upscale parameter.</li><li>To specify a width more than 100% of the original image, use the <span data-type='inlineCode'>p</span> parameter. For example, to get a width of 250%, use <span data-type='inlineCode'>width=250p</span>.<ol></ol></li></ol></div><p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}`

**Method**: `GET`

## Query Parameters

- **width** (optional)
  <p>Enter the value of the image width in pixels or percentage. For Example 100 or 0.90 or 250p.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

