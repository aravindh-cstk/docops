---
title: "Decrease contrast"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&contrast={contrast_value}
url: /decrease-contrast
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.065Z
updated_at: 2025-08-28T13:58:36.685Z
---

# Decrease contrast

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><div class="additional-notes">
  <h5>Additional Notes</h5>
  <ol>
    <li>The default value for the <span data-type='inlineCode'>contrast</span> parameter is <span data-type='inlineCode'>0</span>. This renders an unchanged image.</li>
    <li>A value of <span data-type='inlineCode'>-100</span> will render a neutral gray image.</li>
  </ol>
</div>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&contrast={contrast_value}`

**Method**: `GET`

## Query Parameters

- **contrast** (optional)
  <!--StartFragment--><p>Enter the contrast value (-100 to -1) to be applied to the image.<span style="background-color: initial;"></span><br><!--EndFragment--></p>


- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

