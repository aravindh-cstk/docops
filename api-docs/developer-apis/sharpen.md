---
title: "Image | Sharpen"
description: Use Image Delivery API endpoints for sharpen operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developer-apis/image-delivery-api/sharpen
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Sharpen



## Sharpen

The sharpen parameter allows you to increase the definition of the edges of objects in an image. This helps render a clear image with high detail and sharpness. You need to specify the following values for this parameter:

- a{value}: Amount (a) specifies the amount of contrast to be set for the image edges that you need to sharpen. This amount value is defined as the difference between the darkest and lightest tones in a given image.
- r{value}: Radius (r) specifies the radius of the image edges that you need to sharpen. A lower radius value sharpens only the pixels around the edges, while a higher radius value helps the sharpening effect spread over a broader band of pixels.Tip: The radius value is directly proportional to the size of an image. For example, to get a balanced sharpening effect for two images with 3000x3000 pixels and 1000x1000 pixels, you need to set a radius value of 3 pixels for the larger image and 1 pixel for the smaller image.
- t{value}: Threshold (t) specifies the range of image edges that need to be ignored while sharpening an image. The threshold value sharpens the more noticeable edges of an image and leaves the edges with minor details untouched. For example, to sharpen an image of a human face, you would want to sharpen only the facial characteristics such as eyes, nose, or lips, and not concentrate on minor details such as pimples and birthmarks.

Let us try to increase the sharpness of a given image by amount:2, radius:1000, and threshold:2.

### Increase sharpness

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&sharpen={sharpen}`

##### Things to Keep in Mind

  

1. To specify the amount of increase in sharpness, you can use any decimal number (float) between 0 and 10.
2. To specify the radius (size) of the sharpening area, you can use any decimal number (float) between 1 and 1000. You can also use percent style values to define the radius of the sharpening area, for example, 50p.
3. To specify the threshold of the sharpening area, you can use any whole number (integer) between 0 and 255.

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **sharpen** (optional)
  Enter the value for the amount (for e.g. a5 ) of increase in contrast, the radius (for e.g. r1000) of the image edges to be sharpened, and the threshold (for e.g. t2) range of the image edges that need to be ignored while sharpening. The format of this parameter is: sharpen=a{amount_value},r{radius_value},t{threshold_value}
  Default: `a5,r1000,t2`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

