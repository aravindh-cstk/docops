---
title: "Try 'Not In' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/array-not-equals-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Not In' Operator

**** `/stacks/apiKey/explore`

Get all entries in which the value of a field does not match any of the given values. This parameter will compare field values of entries to that of the values provided in the condition, and the query will retrieve entries that have field values that do not match any of the values provided.

**Example**: In the **Product** content type, you have a field named **Title**. If, for instance, you need to retrieve the entries where the field value does not fall in the given set, your query will look as follows:

```
query {
  all_product(
    where: {
      title_nin: ["Redmi 3S", "Galaxy Note", "Redmi Note Prime"]
    }) {
    items {
      title
      price_in_usd
      size
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the 'Title', ‘Price in USD’, Size, and ‘Color’ fields.

