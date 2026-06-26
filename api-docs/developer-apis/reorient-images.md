---
title: "Image | Reorient Images"
description: Use Image Delivery API endpoints for reorient images operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developer-apis/image-delivery-api/reorient-images
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Reorient Images



## Orientation

The orient parameter lets you control the cardinal orientation of the given image. Using this parameter, you can orient the image right or left, flip horizontally or vertically or both, and do a lot more. It can automatically correct the orientation of the image if the source image contains orientation details within its EXIF data (Exchangeable Image File Format).

You can use any of the following values for the orient parameter: 

- 1 - Set image to default
- 2 - Flip image horizontally
- 3 - Flip image horizontally and vertically 
- 4 - Flip image vertically
- 5 - Flip image horizontally and then rotate 90 degrees towards left
- 6 - Rotate image 90 degrees towards right
- 7 - Flip image horizontally and then rotate 90 degrees towards right
- 8 - Rotate image 90 degrees towards left

Let’s try to change the orientation of the image. Use the request given below to orient the image right.

### Orient the image right

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

Now let’s flip the image horizontally.

#### Query Parameters

- **orient** (optional)
  Enter value to manage the cardinal orientation of the image.
  Default: `6`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Flip the image horizontally

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

You can also use a combination of the two example given above. So, in the following API request, the image will be flipped horizontally, and then orient it right.

#### Query Parameters

- **orient** (optional)
  Enter value to manage the cardinal orientation of the image.
  Default: `2`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`


### Flip horizontally and orient right

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&orient={orient_value}`

**Note:** Check out the [limitations](../../../api-detail/image-delivery-api.md#limitations-with-optimizing-image) that are applicable here.

  

##### Additional Notes

  

1. This parameter can automatically correct the orientation of the image if the source image contains orientation details within its EXIF data (Exchangeable Image File Format).

#### Query Parameters

- **orient** (optional)
  Enter value to manage the cardinal orientation of the image.
  Default: `7`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

