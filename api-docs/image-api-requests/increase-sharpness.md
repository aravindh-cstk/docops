---
title: "Increase sharpness"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&sharpen={sharpen}
url: /increase-sharpness
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.812Z
updated_at: 2025-08-28T13:58:36.321Z
---

# Increase sharpness

<div class="additional-notes">
  <h5>Things to Keep in Mind</h5>
  <ol>
    <li>To specify the amount of increase in sharpness, you can use any decimal number (float) between <span data-type='inlineCode'>0</span> and <span data-type='inlineCode'>10</span>.</li>
    <li>To specify the radius (size) of the sharpening area, you can use any decimal number (float) between <span data-type='inlineCode'>1</span> and <span data-type='inlineCode'>1000</span>. You can also use percent style values to define the radius of the sharpening area, for example, <span data-type='inlineCode'>50p</span>.</li>
    <li>To specify the threshold of the sharpening area, you can use any whole number (integer) between <span data-type='inlineCode'>0</span> and <span data-type='inlineCode'>255</span>.</li>
  </ol>
</div>
<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&sharpen={sharpen}`

**Method**: `GET`

## Query Parameters

- **sharpen** (optional)
  <p>Enter the value for the amount (for e.g. a5&nbsp;) of increase in contrast, the radius (for e.g. r1000) of the image edges to be sharpened, and the threshold (for e.g. t2) range of the image edges that need to be ignored while sharpening.</p>
<p>The format of this parameter is: <span data-type="inlineCode">sharpen=a{amount_value},r{radius_value},t{threshold_value}</span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

