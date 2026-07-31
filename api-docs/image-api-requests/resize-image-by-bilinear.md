---
title: "Resize image by bilinear"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}
url: /resize-image-by-bilinear
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:19.726Z
updated_at: 2025-08-28T13:58:38.698Z
---

# Resize image by bilinear

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>Try the following query to see what happens to the given image when we use the <span data-type='inlineCode'>bicubic</span> resizing filter.</p>

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

