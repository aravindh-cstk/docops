---
title: "Image | Trim Images"
description: Use Image Delivery API endpoints for trim images operations, including retrieval and management workflows.
url: https://www.contentstack.com/docs/developer-apis/image-delivery-api/trim-images
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# Image | Trim Images



## Trim

The trim parameter lets you trim an image from the edges. This is especially useful for removing border or white spaces that the downloaded images usually come with. The value for this parameter can be given in pixels or percentage. 

You can specify values for top, right, bottom, and left edges of an image. For example, to trim the top edge by 25px, right edge by 50px, bottom edge by 75px and left edge by 100, using the query ?trim=25,50,75,100.

You can also combine two or more values. For example, to trim the top edge by 25px, right edge by 50px, bottom edge by 75px and left edge by 50px, use the query ?trim=25,50,75. Similarly, to trim the top and bottom edge by 50px, and right and left by 100, use ?trim=50,100. To trim all edges by 50px, use ?trim=50.

### Trim image

**GET** `/assets/{stack_api_key}/{asset_uid}/{file_uid}/filename.jpg?environment={environment_name}&trim={top_value},{right_value},{bottom_value},{left_value}`

**Additional Notes**
  

- CSS style shorthand values are also acceptable.
- Check out the limitations that are applicable here.

#### Query Parameters

- **trim** (optional)
  Enter value for top, right, bottom, and left edges that needs to be trimmed.
  Default: `25,50,75,100`
- **environment** (required)
  Enter the environment scoped to your delivery token.
  Default: `production`

