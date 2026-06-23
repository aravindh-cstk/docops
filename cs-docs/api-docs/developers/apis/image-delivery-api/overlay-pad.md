---
title: "Image | Overlay Pad"
description: Use Image Delivery API endpoints for overlay pad operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/overlay-pad
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Overlay Pad

The overlay-pad parameter allows you to add padding pixels to the edges of an overlay image. This parameter helps add border or whitespace to an overlay image.

With respect to the location of the padding that you need to add to the overlay image, you need to specify the padding values in this order along with the overlay-pad parameter: overlay-pad={top},{right},{bottom},{left}

**Note**: You can provide the padding values for an overlay image in either pixels or percentage.

You can either specify all the four padding values (top, right, bottom, and left) or combine two or more values. For example, to add padding to the top edge by 30px, right edge by 25px, and bottom edge by 50px, use the query ?overlay-pad=30,25,50. Similarly, to give padding to the top and bottom edge by 40px, and right and left by 75, use ?overlay-pad=40,75. To provide the same padding for all edges, use ?overlay-pad=25.

## API Endpoints

### Overlay pad

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&overlay={relative_URL}&overlay-pad={top_value},{right_value},{bottom_value},{left_value}`

##### Additional Notes

  

1. By default, the overlay-pad parameter applies padding to the overlay image in white.
2. If the overlay image format supports a transparent background, the padding for the overlay image will be made up of transparent pixels.
3. Values specified using CSS style shorthand are also acceptable.
4. CSS shorthand allows you to specify values for all the edges in one property.

**Note:** Check out the [limitations](/docs/developers/apis/image-delivery-api#limitations-with-optimizing-image) that are applicable here.

#### Query Parameters

- **overlay** (optional)
  Specify the relative URL of the image that needs to be set as overlay image.
  Default: `/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/circle.png`
- **overlay-pad** (optional)
  Specify padding values for top, right, bottom, and left edges of the overlay image in pixels or percentage.
  Default: `25,50,75,100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

