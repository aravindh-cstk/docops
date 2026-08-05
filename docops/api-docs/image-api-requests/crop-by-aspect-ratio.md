---
title: "Crop by aspect ratio"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}
url: /crop-by-aspect-ratio
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.702Z
updated_at: 2025-08-28T13:58:27.843Z
---

# Crop by aspect ratio

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>You can set the X-axis and Y-axis position of the top left corner of the crop by using the query <span data-type='inlineCode'>?crop={width_value},{height_value},x{value},y{value}</span>. This lets you define the starting point of the crop region. The x-axis value and y-axis value can be defined in pixels or percentage. An example of this would be <span data-type='inlineCode'>?crop=300,400,x150,y75</span> or <span data-type='inlineCode'>?crop=300,400,x0.50,y0.60</span>.</p>
<p><img src="https://images.contentstack.io/v3/assets/blteae40eb499811073/blt3478638ec5a7ad49/5a54b2e15183fe956e52e850/Crop sub region.png" data-sys-asset-uid="blt3478638ec5a7ad49" alt="Crop sub region.png" data-image="ciz0gfcwllem" /></p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&crop={crop}`

**Method**: `GET`

## Query Parameters

- **width** (optional)
  <p>Enter the value of the image width in pixels or percentage. For example, 300 or 0.80 or 250p</p>
- **height** (optional)
  <p>Enter the value of the image height in pixels or percentage. For example, 400 or 0.90 or 250p</p>
- **crop** (optional)
  <p>Enter the width and height of the crop area in aspect ratio.<br>
</p>
<p>The format of the parameter is: <span data-type="inlineCode">crop={width_value}:{height_value}</span><br>
</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

