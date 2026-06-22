---
title: "Try 'Greater Than' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/greater-than
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Greater Than' Operator


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

Get entries in which the value for a field is greater than the value provided in the condition.

**Example**: Let’s say you want to retrieve all the entries that have the value of the **Price in USD** field set to a value that is greater than **180**. Your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_gt: 180
    }) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Price in USD’, and ‘Color’ fields.
