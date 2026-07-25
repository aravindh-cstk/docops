---
title: "Resize image by bicubic"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}
url: /resize-image-by-bicubic
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.755Z
updated_at: 2025-08-28T13:58:39.352Z
---

# Resize image by bicubic

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>Let us also try out the <span data-type='inlineCode'>lanczos</span> resizing filter to check how it upscales a given image.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}`

**Method**: `GET`

## Query Parameters

- **width** (optional)
  <p>Enter the value of the image width in pixels or percentage. For example, 100 or 0.90 or 250p.</p>
- **height** (optional)
  <p>Enter the value of the image height in pixels or percentage. For example, 100 or 0.90 or 250p.</p>
- **resize-filter** (optional)
  <p>Enter the value for the resizing filter to be used to resize the image.</p>
<p>The format of the parameter is:&nbsp;<span data-type="inlineCode">resize-filter={resize-filter_value}</span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

