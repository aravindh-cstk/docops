---
title: "Try 'OR' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/or-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'OR' Operator

**** `/stacks/apiKey/explore`

Get all entries that satisfy at least one of the given conditions provided in the 'OR' query.

**Example**: Let’s say you want to retrieve entries in which either the value for the **Color** field is 'Gold' or 'Black', your query will look as follows:

```
query {
  all_product(
    where: {
      OR: [
        {
          color: "Black"
        },
        {
          color: "Gold"
        }
      ]
    }) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’, ‘Color’, and ‘Price in USD’ fields.

