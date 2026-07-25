---
title: "Repeat overlay horizontally"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-repeat={value}
url: /overlay-repeat
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:16.866Z
updated_at: 2025-08-28T13:58:30.618Z
---

# Repeat overlay horizontally

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>Let us now try how the <span data-type='inlineCode'>vertical repetition</span> of overlay image works.</p>
<p><img src="https://images.contentstack.io/v3/assets/blteae40eb499811073/bltdfb1d12b9182e5e6/5a5462f9300362ae6e44fa60/Repeat overlay vertically.png" data-sys-asset-uid="bltdfb1d12b9182e5e6" alt="Repeat overlay vertically.png" data-image="kq50hqqdzdax" /></p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-repeat={value}`

**Method**: `GET`

## Query Parameters

- **overlay** (optional)
  <p>Specify the relative URL of the image that needs to be set as overlay image.</p>
- **overlay-repeat** (optional)
  <p>Enter a value for the repeat pattern of the overlay image. Possible values are <span data-type="inlineCode">x</span>, <span data-type="inlineCode">y</span>, and <span data-type="inlineCode">both</span>.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

