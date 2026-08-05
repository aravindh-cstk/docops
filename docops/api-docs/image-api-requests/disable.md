---
title: "Disable upscaling of image"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={value}&disable={value}
url: /disable
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.674Z
updated_at: 2025-08-28T13:58:26.783Z
---

# Disable upscaling of image

<p>To see this parameter in action, the <span data-type='inlineCode'>height</span> or <span data-type='inlineCode'>width</span> (or both) parameter should be used with it.</p><p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={value}&disable={value}`

**Method**: `GET`

## Query Parameters

- **width** (optional)
  <p><span style="background-color: initial;">Enter the value of the image width in pixels or percentage&nbsp;</span><br></p>

<p>For Example 100 or 0.90 or 250p</p>
- **disable** (optional)
  <p>Enter the name of the functionality that you want to disable.&nbsp;</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

