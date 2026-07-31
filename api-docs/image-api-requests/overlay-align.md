---
title: "Align overlay"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-align={overlay-align}
url: /overlay-align
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:12.129Z
updated_at: 2025-08-28T13:58:30.949Z
---

# Align overlay

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-align={overlay-align}`

**Method**: `GET`

## Query Parameters

- **overlay** (optional)
  <p>Specify the relative URL of the image that needs to be set as overlay image.</p>
- **overlay-align** (optional)
  <p>Specify the position of the overlay image. For example {left,bottom}.</p>
<p>The format of the parameter is <span data-type="inlineCode">overlay-align={value},{value}</span>.</p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

