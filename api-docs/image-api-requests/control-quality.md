---
title: "Quality"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&quality={quality_value}
url: /control-quality
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.972Z
updated_at: 2025-08-28T13:58:26.147Z
---

# Quality

<div class="additional-notes"><h5>Additional Notes</h5><ol><li>Lower the value, lower will be the quality of the output image, and vice versa.</li><li>The <span data-type='inlineCode'>quality</span> parameter is not applicable for the image types (GIF and PNG) that are not lossy.</li><li>When only the <span data-type='inlineCode'>quality</span> parameter is specified, and if the output image is larger than the actual image, the original image will be returned.</li></ol></div><p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&quality={quality_value}`

**Method**: `GET`

## Query Parameters

- **quality** (optional)
  <p>Enter the percentage value (1 to 100) of the compression to be applied on the image.</p>
<p><span style="background-color: initial;"></span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

