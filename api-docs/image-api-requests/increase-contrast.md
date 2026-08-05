---
title: "Increase contrast"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&contrast={contrast_value}
url: /increase-contrast
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:15.016Z
updated_at: 2025-08-28T13:58:37.696Z
---

# Increase contrast

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>To decrease the value of the <span data-type='inlineCode'>contrast</span> parameter of an image, pass a negative value:</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&contrast={contrast_value}`

**Method**: `GET`

## Query Parameters

- **contrast** (optional)
  <!--StartFragment--><p>Enter the contrast value (1 to 100) to be applied to the image.<span style="background-color: initial;"></span><br><!--EndFragment--></p>


- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

