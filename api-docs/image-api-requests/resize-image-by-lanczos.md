---
title: "Resize image by lanczos"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&width={width_value}&height={height_value}&resize-filter={resize-filter_value}
url: /resize-image-by-lanczos
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:20.682Z
updated_at: 2025-08-28T13:58:39.017Z
---

# Resize image by lanczos

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><div class="additional-notes">
  <h5>Additional Notes</h5>
  <ol>
    <li>You can use the <span data-type='inlineCode'>bicubic</span> filter when you need to generate a smaller image with a natural sharpening effect.</li>
    <li>You can use the <span data-type='inlineCode'>bilinear</span> filter when you need to generate a larger image with a natural smoothing effect.</li>
    <li>You can use the <span data-type='inlineCode'>nearest</span> filter to provide a natural pixelation effect while resizing the number of pixels in the given image.</li>
    <li>You can use the <span data-type='inlineCode'>lanczos</span> filter when you need to generate a new image with the best quality. The default value for this filter is <span data-type='inlineCode'>lanczos3</span>.</li>
  </ol>
</div>

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

