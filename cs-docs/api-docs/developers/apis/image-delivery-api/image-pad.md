---
title: "Image | Pad"
description: Use Image Delivery API endpoints for pad operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developers/apis/image-delivery-api/image-pad
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Pad

This parameter lets you add extra pixels to the edges of an image. This is useful if you want to add whitespace or border to an image. The value for this parameter can be given in pixels or percentage. 

You can specify values for top, right, bottom, and left padding for an image. For example, to add padding to the top edge by 25px, right edge by 50px, bottom edge by 75px and left edge by 100, use the query ?pad=25,50,75,100.

You can also combine two or more values. For example, to add padding to the top edge by 25px, right edge by 50px, bottom edge by 75px and left edge by 50px, use the query ?pad=25,50,75. Similarly, to give padding to the top and bottom edge by 50px, and right and left by 100, use ?pad=50,100. To provide padding on all edges, use ?pad=50.

It is important to note that by default the pad parameter applies white background. If the given image contains transparent background, and the output image also has transparency, then transparent padding will be applied.

## Related Pages

- [](https://www.contentstack.com/docs)
