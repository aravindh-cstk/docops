---
title: "Enable auto optimization and encode to progressive JPEG"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}&auto={auto}
url: /automate-optimization
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:18.772Z
updated_at: 2025-08-28T13:58:41.053Z
---

# Enable auto optimization and encode to progressive JPEG

<div class="additional-notes"><h5>Additional Notes</h5><ol><li>WEBP and AVIF formats are not supported by all browsers.</li><li>If the <span class="code">format</span> parameter is used with this parameter, the <span class="code">format</span> parameter will be ignored in browsers that support WEBP and AVIF formats.</li></ol></div><p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}&auto={auto}`

**Method**: `GET`

## Query Parameters

- **auto** (optional)
  <p>Enter value for auto optimization of the image. It can either be <span class="code">webp</span> or <span class="code">avif</span>.</p>
- **format** (optional)
  <p>Enter the format that the image needs to be converted to for browsers that don’t support WEBP or AVIF.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

