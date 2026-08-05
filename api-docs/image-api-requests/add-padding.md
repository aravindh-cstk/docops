---
title: "Add padding"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&pad={top_value},{right_value},{bottom_value},{left_value}
url: /add-padding
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:16.016Z
updated_at: 2025-08-28T13:58:32.941Z
---

# Add padding

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>To add a colored border, you need to use the <span data-type='inlineCode'>bg-color</span> parameter along with pad. For example, to add a red border, use the query <span data-type='inlineCode'>?pad=10&amp;bg-color=FF0000</span>. Also, note that if the <span data-type='inlineCode'>canvas</span> and <span data-type='inlineCode'>pad</span> parameters are used together, the pad parameter will be ignored.</p>
<p><img src="https://images.contentstack.io/v3/assets/blteae40eb499811073/blt4645031e3840a89d/5a5464595a988db96e45eb3e/Padding with BG.png" data-sys-asset-uid="blt4645031e3840a89d" alt="Padding with BG.png" data-image="urx1h4z8mgps" /></p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&pad={top_value},{right_value},{bottom_value},{left_value}`

**Method**: `GET`

## Query Parameters

- **pad** (optional)
  <p>Enter value for top, left, bottom and right edges for which padding needs to be applied</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

