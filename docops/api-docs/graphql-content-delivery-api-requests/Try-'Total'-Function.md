---
title: "Try 'Total' Function"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/total
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Total' Function

**** `/stacks/apiKey/explore`

The **total** field returns the number of entries for a specified content type.

**Example**: If you wish to know the total number of entries in the **Product** content type that contain a value within the **Price in USD** field, you need to run the following query:

```
query {
  all_product(
    where: {
      price_in_usd_exists: true
    }) {
    total
    items {
      title
      price_in_usd
    }
  }
}
```

The **total** field will display the number of entries where the ‘Price in USD’ field exists for a product within the response body, including details of just the ‘Title’ and ‘Price in USD’ fields.

