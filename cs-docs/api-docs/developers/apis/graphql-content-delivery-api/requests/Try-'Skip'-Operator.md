---
title: "Try 'Skip' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/skip
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Skip' Operator

**** `/stacks/apiKey/explore`

The skip parameter will skip a specific number of entries in the output. So, for example, if the content type contains around **12 entries** and you want to skip the **first 5** entries to get only the last 7 in the response body, you need to specify ‘5’ here. Your query will look as follows:

```
query {
  all_product(
    skip: 5
  ) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will skip the first five entries and only include the last seven entries of the **Product** content type that satisfy the query, displaying details of just the ‘Title’ and ‘Color’ fields.

