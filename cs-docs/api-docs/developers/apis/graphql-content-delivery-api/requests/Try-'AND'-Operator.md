---
title: "Try 'AND' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/and-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'AND' Operator

**** `/stacks/apiKey/explore`

Get entries that satisfy all the conditions provided in the 'AND' query.

**Example**: Let’s say you want to retrieve entries in which the **Title** field is set to 'Redmi Note 3' and the **Color** field is 'Gold'. Your query will look as follows:

```
query {
  all_product(
    where: {
      AND: [
        {
          title: "Redmi Note 3"
        },
        {
          color: "Gold"
        }
      ]
    }) {
    items {
      title
      price_in_usd
      size
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Size’, and ‘Price in USD’ fields.

