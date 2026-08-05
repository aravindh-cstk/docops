---
title: "Decrease brightness"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}
url: /decrease-brightness
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.094Z
updated_at: 2025-08-28T13:58:38.027Z
---

# Decrease brightness

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><div class="additional-notes">
  <h5>Additional Notes</h5>
  <ol>
    <li>The default value for the <span data-type='inlineCode'>brightness</span> parameter is <span data-type='inlineCode'>0</span>. This renders the image unchanged.</li>
    <li>A value of <span data-type='inlineCode'>100</span> will render an entirely white image.</li>
    <li>A value of <span data-type='inlineCode'>-100</span> will render an entirely black image.</li>
  </ol>
</div>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}`

**Method**: `GET`

## Query Parameters

- **brightness** (optional)
  <p>Enter the brightness value (-100 to -1) to be applied to the image.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

