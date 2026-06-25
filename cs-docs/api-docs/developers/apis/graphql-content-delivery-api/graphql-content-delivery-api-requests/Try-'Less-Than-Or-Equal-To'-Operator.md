---
title: "Try 'Less Than Or Equal To' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/less-than-or-equal-to
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-29
---

# Try 'Less Than Or Equal To' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value of a field is lesser than or equal to the value provided in the condition.

**Example**: Let’s say you want to retrieve all the entries that have the value of the **Price in USD** field set to a value that is less than or equal to **150**. Your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_lte: 150
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.

