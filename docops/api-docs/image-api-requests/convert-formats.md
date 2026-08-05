---
title: "Convert to WEBP Lossless"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}
url: /convert-formats
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.948Z
updated_at: 2025-08-28T13:58:40.382Z
---

# Convert to WEBP Lossless

<div class="additional-notes"><strong>Additional Notes</strong>:<ol><li>The <span class="code">quality</span> parameter can used only with JPEG, Progressive JPEG, <span>AVIF, </span>or WEBP (Lossy) image types.</li><li>The WEBP and AVIF image type is supported only by Google Chrome, Opera, and Android browsers.</li><li>GIF transcoding is not supported as of now.</li><li>If <span class="code">'auto=webp'</span> or <span class="code">'auto=avif'</span> is used with the <span class="code">format</span> parameter, the browsers that support the WEBP format will ignore the <span class="code">format</span> parameter.</li></ol></div>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&format={format}`

**Method**: `GET`

## Query Parameters

- **format** (optional)
  <p>Enter the format into which the source image needs to be converted.</p>
<p><span style="background-color: initial;"></span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

