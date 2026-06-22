---
title: "Try 'Equals' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/equals-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Equals' Operator


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

Get data of entries containing the field values matching the specified condition.

Example: In the **Product** content type, you have a field named **Title**. If, for instance, you want to retrieve certain fields of all the entries in which the value for the ‘Title’ field is **Galaxy Note**, your query will be formed as follows:

```
query {
  all_product(
    where: {
      title: "Galaxy Note"
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query and include details of just the ‘Title’ and ‘Price in USD’ fields.
