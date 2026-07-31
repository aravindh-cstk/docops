---
title: "Increase brightness"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}
url: /increase-brightness
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.011Z
updated_at: 2025-08-28T13:58:37.035Z
---

# Increase brightness

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>To decrease the value of the <span data-type='inlineCode'>brightness</span> parameter of an image, pass a negative value:</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&brightness={brightness_value}`

**Method**: `GET`

## Query Parameters

- **brightness** (optional)
  <p>Enter the brightness value (1 to 100) to be applied to the image.</p>
<p><span style="background-color: initial;"></span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

