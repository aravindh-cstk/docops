---
title: "Flip the image horizontally"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}
url: /reorient-images
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.147Z
updated_at: 2025-08-28T13:58:29.278Z
---

# Flip the image horizontally

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>You can also use a combination of the two example given above. So, in the following API request, the image will be flipped horizontally, and then orient it right.</p>
<p><img src="https://images.contentstack.io/v3/assets/blteae40eb499811073/blt063fbb574c937165/5a54b361c67fa3557ca40567/Flip horizontally and orient right.png" data-sys-asset-uid="blt063fbb574c937165" alt="Flip horizontally and orient right.png" data-image="z95nc9zftd1f" /></p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}`

**Method**: `GET`

## Query Parameters

- **orient** (optional)
  <p>Enter value to manage the cardinal orientation of the image.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

