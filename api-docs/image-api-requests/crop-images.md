---
title: "Crop by width and height"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}
url: /crop-images
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.146Z
updated_at: 2025-08-28T13:58:27.471Z
---

# Crop by width and height

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>You can define the crop region by means of passing the aspect ratio for the image, for example, <span data-type='inlineCode'>?crop={width}:{height}</span>. So, if you have set an aspect ratio of <span data-type='inlineCode'>1:3</span> for an image, it means that the image height will be three times the width of the image.</p><p>Along with the <span data-type='inlineCode'>crop</span> parameter, you also need to specify either the <span data-type='inlineCode'>width</span> or <span data-type='inlineCode'>height</span> parameter or both in the API request to return an output image with the correct dimensions. If neither <span data-type='inlineCode'>width</span> nor <span data-type='inlineCode'>height</span> is defined for the given image, the API request will consider the dimensions of the source image and crop the image from the center on the basis of the requested aspect ratio. In this case, the image appears stretched out of proportion.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&crop={crop}`

**Method**: `GET`

## Query Parameters

- **crop** (optional)
  <p>Enter the width and height of the crop area in pixels or percentage, respectively.</p>
<p>The format of the parameter is: <span data-type="inlineCode">crop={width_value},{height_value}</span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

