---
title: "Canvas sub region"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={canvas}
url: /canvas-sub-region
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:21.635Z
updated_at: 2025-08-28T13:58:39.702Z
---

# Canvas sub region

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>You can set the horizontal and vertical offset of the canvas area by using the query <span data-type='inlineCode'>?canvas={width_value},{height_value},offset-x{value},offset-y{value}</span>. This allows you to define the center point of the canvas area. The x-axis offset value and y-axis offset value can be defined only in percentage. An example of this would be <span data-type='inlineCode'>?canvas=700,800,offset-x0.65,offset-y0.80</span>.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={canvas}`

**Method**: `GET`

## Query Parameters

- **canvas** (optional)
  <p>Enter the width of the canvas area, height of the canvas area, top-left corner point of the canvas on X-axis, and the top-left corner point of the canvas on Y-axis in pixels or percentage.</p>
<p>The format of the parameter is <span data-type="inlineCode">canvas={width_value},{height_value},x{value},y{value}</span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

