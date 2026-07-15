---
title: "Try 'Not Equals' Operator"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/not-equals-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Not Equals' Operator

**** `/stacks/apiKey/explore`

Get all the entries in which the value of a field does not match the value provided in the condition.

**Example**: In the **Product** content type, you have a field named **Price in USD**. If, for instance, you need to retrieve all entries where the value of this field is not equal to '200', your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_ne: 200
    }) {
    items {
      title
      size
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title,’ ‘Size,’ and ‘Color’ fields.

