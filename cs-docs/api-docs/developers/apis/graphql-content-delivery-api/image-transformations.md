---
title: "GraphQL | Image Transformations"
description: Apply image transformation parameters in GraphQL queries to resize, crop, optimize, and format delivered assets.
url: https://www.contentstack.com/docs/developers/apis/graphql-content-delivery-api/image-transformations
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Image Transformations

You can use the parameters of Contentstack’s [Image Delivery API](/docs/developers/apis/image-delivery-api) in GraphQL queries to transform images while fetching them.  
  
The following table consists of the different parameters that Contentstack GraphQL supports for image delivery, along with their acceptable values:

| Parameter | Supported Values |
| --- | --- |
| auto | WEBP |
| width | String |
| height | String |
| disable | UPSCALE |
| format | GIFPNGJPGPJPGWEBPWEBPLLWEBPLY |
| fit | BOUNDSCROP |
| quality | Integer |
| crop | String |
| trim | String |
| orient | DEFAULTHORIZONTALLYBOTHVERTICALLYROTATE90LEFTROTATE90RIGHT |
| overlay | String |
| overlay_align | TOPBOTTOMLEFTRIGHTMIDDLECENTER |
| overlay_repeat | XYBOTH |
| overlay_width | String |
| overlay_height | String |
| pad | String |
| bg_color | String |
| dpr | String |
| disposition | ATTACHMENTINLINE |

Let us look at a few simple and complex examples to understand how Contentstack’s Image Delivery parameters work with GraphQL queries to transform images.

## Related Pages

- [Using a Single Parameter](https://www.contentstack.com/docs)
- [Using Multiple Parameters](https://www.contentstack.com/docs)
