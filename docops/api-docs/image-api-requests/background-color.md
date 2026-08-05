---
title: "Change background color using hexadecimal value"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}
url: /background-color
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.107Z
updated_at: 2025-08-28T13:58:33.948Z
---

# Change background color using hexadecimal value

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>The second type is the Red, Blue, Green value which defines the intensity of the corresponding color, with the value ranging anywhere between <span data-type='inlineCode'>0</span> and <span data-type='inlineCode'>255</span> for each. An example of this is ?bg-color=140,220,123.&nbsp;</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.png?environment={environment_name}&bg-color={value}`

**Method**: `GET`

## Query Parameters

- **bg-color** (optional)
  <p>Enter the value for the background color. It should be a 3- or 6-digit hexadecimal value.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

