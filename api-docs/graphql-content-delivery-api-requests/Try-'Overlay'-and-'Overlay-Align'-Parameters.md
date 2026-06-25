---
title: "Try 'Overlay' and 'Overlay Align' Parameters"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/overlay-and-overlay-align-parameters
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-30
---

# Try 'Overlay' and 'Overlay Align' Parameters

**** `/stacks/apiKey/explore`

##### Using the Overlay and Overlay Align Parameters

To place one image on top of another, use the overlay parameter. In addition, use the overlay_align parameter to define the position of the overlay image.

For example, we have specified the value of the overlay parameter as the URL of the image to be placed on top. We have also set the value of the overlay_align parameter as ‘LEFT’ in the following image transformation query.

```
query {
  all_assets(limit: 25) {
    total
    items {
        title
      url(transform: {overlay: "/v3/assets/blteae40eb499811073/bltb21dacdd20d0e24c/59e0c401462a293417405f34/download", overlay_align: LEFT})
    }
  }
}
```

This query will place the image lying at the specified URL on top of the original image. It will also align the overlay image toward the left side of the original image.

