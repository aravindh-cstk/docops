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

## Related Pages

- [](https://www.contentstack.com/docs)
