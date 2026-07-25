---
title: "Trim image"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&trim={top_value},{right_value},{bottom_value},{left_value}
url: /trim-images
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.039Z
updated_at: 2025-08-28T13:58:43.439Z
---

# Trim image

<div class="add-resource"><strong>Additional Notes</strong>
  <ul>
    <li>CSS style shorthand values are also acceptable.</li>
    <li>Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</li>
  </ul>
</div>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&trim={top_value},{right_value},{bottom_value},{left_value}`

**Method**: `GET`

## Query Parameters

- **trim** (optional)
  <p>Enter value for top, right, bottom, and left edges that needs to be trimmed.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

