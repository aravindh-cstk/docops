---
title: "Add padding and background color"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&pad={top_value},{right_value},{bottom_value},{left_value}&bg-color={value}
url: /add-padding-and-background-color
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.682Z
updated_at: 2025-08-28T13:58:33.271Z
---

# Add padding and background color

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><div class="additional-notes">
  <h5>Additional Notes</h5>
  <ol>
    <li>By default, this parameter applies padding in white color.</li>
    <li>If the given image contains transparent background and the output image also has transparency, then transparent padding will be applied.</li>
    <li>CSS style shorthand values are also acceptable.</li>
    <li>If the <span data-type='inlineCode'>pad</span> and the <span data-type='inlineCode'>canvas</span> parameters are used together in the same request, the <span data-type='inlineCode'>pad</span> parameter will be ignored.</li>
  </ol>
</div>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&pad={top_value},{right_value},{bottom_value},{left_value}&bg-color={value}`

**Method**: `GET`

## Query Parameters

- **pad** (optional)
  <p>Enter the values for top, left, bottom and right edges for which padding needs to be applied.&nbsp;</p>
- **bg-color** (optional)
  <p>Enter the values for background color for padding.&nbsp;</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

