---
title: "Overlay pad"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-pad={top_value},{right_value},{bottom_value},{left_value}
url: /overlay-pad
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.129Z
updated_at: 2025-08-28T13:58:33.608Z
---

# Overlay pad

<div class="additional-notes">
  <h5>Additional Notes</h5>
  <ol>
    <li>By default, the <span data-type='inlineCode'>overlay-pad</span> parameter applies padding to the overlay image in white.</li>
    <li>If the overlay image format supports a transparent background, the padding for the overlay image will be made up of transparent pixels.</li>
    <li>Values specified using CSS style shorthand are also acceptable.</li>
    <li>CSS shorthand allows you to specify values for all the edges in one property.</li>
  </ol>
</div>
<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-pad={top_value},{right_value},{bottom_value},{left_value}`

**Method**: `GET`

## Query Parameters

- **overlay** (optional)
  <p>Specify the relative URL of the image that needs to be set as overlay image.</p>
- **overlay-pad** (optional)
  <p>Specify padding values for top, right, bottom, and left edges of the overlay image in pixels or percentage.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

