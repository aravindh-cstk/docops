---
title: "Fetch first frame"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.gif?environment={environment_name}&frame={frame_value}
url: /fetch-first-frame
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:14.082Z
updated_at: 2025-08-28T13:58:34.970Z
---

# Fetch first frame

<div class="additional-notes">
  <h5>Additional Notes</h5>
  <ol>
    <li>The <span data-type='inlineCode'>frame</span> parameter only supports animated GIF file format.</li>
    <li>Currently, the <span data-type='inlineCode'>frame</span> parameter can only fetch the first frame from an animated GIF.</li>
  </ol>
</div>
<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.gif?environment={environment_name}&frame={frame_value}`

**Method**: `GET`

## Query Parameters

- **frame** (optional)
  <p>Enter the frame number to fetched for the animated GIF.&nbsp;You can only fetch the first frame, for e.g. 1.</p>
<p>The format of this parameter is: <span data-type="inlineCode">frame={frame_value}</span></p>
- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

