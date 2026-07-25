---
title: "Increase saturation"
description: /assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&saturation={saturation_value}
url: /increase-saturation
product: Contentstack
doc_type: api-request
created_at: 2023-01-05T14:09:13.129Z
updated_at: 2025-08-28T13:58:35.293Z
---

# Increase saturation

<p class="note"><strong>Note:</strong> Check out the <a href="/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image" target="_self">limitations</a> that are applicable here.</p><p>To decrease the value of the <span data-type='inlineCode'>saturation</span> parameter of an image, pass a negative value:</p>

**API Endpoint**: `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&saturation={saturation_value}`

**Method**: `GET`

## Query Parameters

- **saturation** (optional)
  <!--StartFragment--><p>Enter the saturation value (1 to 100) to be applied to the image.<span style="background-color: initial;"></span><br><!--EndFragment--></p>


- **environment** (required)
  <p>Enter the environment scoped to your delivery token.</p>

