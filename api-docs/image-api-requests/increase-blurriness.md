---
title: "Increase blurriness"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&blur={blur}
url: /increase-blurriness
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.151Z
updated_at: 2025-08-28T13:58:34.640Z
---

# Increase blurriness

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&blur={blur}`

**Method**: `GET`

## Query Parameters

- **blur** (optional)
  <p>Enter the blurriness value to be applied to the image, for e.g. 40.</p>
<p>The format of this parameter is: <span data-type="inlineCode">blur={blur_value}</span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

