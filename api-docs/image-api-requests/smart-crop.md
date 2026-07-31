---
title: "Smart Crop"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}
url: /smart-crop
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.094Z
updated_at: 2025-08-28T13:58:45.263Z
---

# Smart Crop

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><div class="additional-notes">
  <h5>Additional Notes</h5>
  <ol>
    <li>The <span data-type='inlineCode'>x</span> and <span data-type='inlineCode'>y</span>, or <span data-type='inlineCode'>offset-x</span> and <span data-type='inlineCode'>offset-y</span> parameters are not mandatory.</li>
    <li>The <span data-type='inlineCode'>x</span> and <span data-type='inlineCode'>y</span>, or <span data-type='inlineCode'>offset-x</span> and <span data-type='inlineCode'>offset-y</span> parameters can be used in any order. The only rule is that these parameters should come after the width parameter in the API request.</li>
    <li>If the <span data-type='inlineCode'>x</span> and <span data-type='inlineCode'>y</span>, or <span data-type='inlineCode'>offset-x</span> and <span data-type='inlineCode'>offset-y</span> parameters are not specified, the image will be cropped from the center.</li>
    <li>The <span data-type='inlineCode'>x</span> parameter can be used without <span data-type='inlineCode'>y</span> (and vice versa), and the <span data-type='inlineCode'>offset-x</span> parameter can be used without <span data-type='inlineCode'>offset-y</span> (and vice versa).</li>
  </ol>
</div>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}`

**Method**: `GET`

## Query Parameters

- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>
- **width** (optional)
  <p>Enter the value of the image width in pixels or percentage. For example, 300 or 0.80 or 250p</p>
- **height** (optional)
  <p>Enter the value of the image height in pixels or percentage. For example, 400 or 0.90 or 250p</p>
- **crop** (optional)
  <p>Enter the width and height of the crop area in aspect ratio. Append the <span data-type="inlineCode">smart</span> parameter to this API request.</p>
<p>The format of the parameter is: <span data-type="inlineCode">crop={width_value}:{height_value},smart</span></p>

