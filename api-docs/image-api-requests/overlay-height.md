---
title: "Set overlay height"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-height={value}
url: /overlay-height
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.090Z
updated_at: 2025-08-28T13:58:32.274Z
---

# Set overlay height

<div class="additional-notes">
  <h5>Additional Notes</h5>
  <ol>
    <li>When height is specified in percentage, the height is relative to the output image.</li>
    <li>To specify a height more than 100% of the original image, use the <span data-type='inlineCode'>p</span> parameter. For example, to get a height of 250%, use <span data-type='inlineCode'>overlay-height=250p</span>.</li>
    <li>If the overlay image used is larger than the actual image, the overlay image will be cropped to fit the actual image.</li>
  </ol>
</div>
<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-height={value}`

**Method**: `GET`

## Query Parameters

- **overlay** (optional)
  <p>Specify the relative URL of the image that needs to be set as overlay image.</p>
- **overlay-height** (optional)
  <p>Specify the height of the overlay image in pixels or percentage.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

