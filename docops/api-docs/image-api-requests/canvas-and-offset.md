---
title: "Canvas and offset"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={canvas}
url: /canvas-and-offset
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.627Z
updated_at: 2025-08-28T13:58:40.731Z
---

# Canvas and offset

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><div class="additional-notes">
  <h5>Additional Notes</h5>
  <ol>
    <li>By default, the <span data-type='inlineCode'>canvas</span> parameter creates a canvas with white background for the output image. For image formats that support transparency, the canvas will display a transparent background.</li>
    <li>The values defined for the <span data-type='inlineCode'>canvas</span> parameter should always be greater than or equal to the image dimensions of the specified image.</li>
    <li>If the <span data-type='inlineCode'>width</span> and <span data-type='inlineCode'>height</span> parameters are not provided while specifying an aspect ratio for the canvas, the API request will return the largest area of the the requested aspect ratio as per the dimensions specified for the source image.</li>
    <li>The <span data-type='inlineCode'>x</span> and <span data-type='inlineCode'>y</span>, or <span data-type='inlineCode'>offset-x</span> and <span data-type='inlineCode'>offset-y</span> parameters are optional.</li>
    <li>The <span data-type='inlineCode'>x</span> and <span data-type='inlineCode'>y</span>, or <span data-type='inlineCode'>offset-x</span> and <span data-type='inlineCode'>offset-y</span> parameters can be specified in any order. However, these parameters should follow the <span data-type='inlineCode'>width</span> and <span data-type='inlineCode'>height</span> parameters in the API request.</li>
    <li>If the <span data-type='inlineCode'>x</span> and <span data-type='inlineCode'>y</span> or <span data-type='inlineCode'>offset-x</span> and <span data-type='inlineCode'>offset-y</span> parameters are not specified, the image will be positioned in the center of the canvas.</li>
    <li>The <span data-type='inlineCode'>x</span> parameter can be used without <span data-type='inlineCode'>y</span> (and vice versa), and the <span data-type='inlineCode'>offset-x</span> parameter can be used without <span data-type='inlineCode'>offset-y</span> (and vice versa).</li>
    <li>The <span data-type='inlineCode'>canvas</span> parameter takes precedence over <a href="/docs/developers/apis/image-delivery-api#pad">the <span data-type='inlineCode'>pad</span> parameter</a> if both are used in the same request.</li>
  </ol>
</div>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={canvas}`

**Method**: `GET`

## Query Parameters

- **canvas** (optional)
  <p>Enter the width, height, horizontal offset,&nbsp;vertical offset&nbsp;of the canvas area in pixels or percentage.</p>
<p>The format of the parameter is:<span data-type="inlineCode">canvas={width_value},{height_value},offset-x{value},offset-y{value}</span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

