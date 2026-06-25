---
title: "Try 'Width' and 'Height' Parameters"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/width-and-height-parameters
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-30
---

# Try 'Width' and 'Height' Parameters

**** `/stacks/apiKey/explore`

Let’s look at a few sample GraphQL queries that make use of multiple parameters.

##### Changing the Width and Height

To dynamically resize the width and height of your output image, use the width and height parameters. For example, we have set the values of the width and height parameters to ‘650’ and ‘400’, respectively, in the following image transformation query.

```
query {
  all_assets(limit: 25) {
    total
    items {
        title
      url(transform: {width: "650", height: "400", disable: UPSCALE})
    }
  }
}
```

This query will render an output image with width and height values of 650 and 400 pixels, respectively.

**Note**: We have also set the disable parameter to UPSCALE to disable the upscale image feature for the output image in the above image transformation query.

