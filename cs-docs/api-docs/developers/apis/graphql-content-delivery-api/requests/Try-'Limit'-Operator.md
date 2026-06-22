---
title: "Try 'Limit' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/limit
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Limit' Operator


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

The limit parameter will return a specific number of entries in the output. So for example, if the content type contains **more than 100** entries and you wish to fetch only the **first 2** entries, you need to specify '2' as the value in this parameter. Your query will look as follows:

```
query {
  all_product(
    limit: 2
  ) {
    items {
      title
      description
    }
  }
}
```

The response body of this query will include only the first two entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Description’ fields.
