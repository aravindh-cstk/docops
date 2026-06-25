---
title: "Try 'Exists' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/exists
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Exists' Operator

**** `/stacks/apiKey/explore`

Get entries if the value of the field mentioned in the condition exists.

**Example**: In the **Product** content type, we have a field named **Price in USD**. If, for instance, you want to retrieve all the entries in the content type in which the field exists, your query will look as follows:

```
query {
  all_product(
    where: {
      price_in_usd_exists: true
    }) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will display all the entries of the **Product** content type that satisfy the query, including details of just the ‘Title’ and ‘Color’ fields.

