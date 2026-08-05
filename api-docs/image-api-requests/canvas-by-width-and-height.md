---
title: "Canvas by width and height"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value}
url: /canvas-by-width-and-height
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:17.836Z
updated_at: 2025-08-28T13:58:40.050Z
---

# Canvas by width and height

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>To define the X-axis and Y-axis position of the top left corner of the canvas area, use the query <span data-type='inlineCode'>?canvas={width_value},{height_value},x{value},y{value}</span>. This allows you to define the starting point of the canvas region. The x-axis value and y-axis value can be specified in pixels or percentage. An example of this would be <span data-type='inlineCode'>?canvas=700,800,x150,y75</span> or <span data-type='inlineCode'>?canvas=700,800,x0.60,y0.50</span>.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&canvas={width_value},{height_value}`

**Method**: `GET`

## Query Parameters

- **canvas** (optional)
  <p>Enter the width and height of the canvas area in pixels or percentage, respectively.</p>
<p>The format of the parameter is:&nbsp;<span data-type="inlineCode">canvas={width_value},{height_value}</span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

