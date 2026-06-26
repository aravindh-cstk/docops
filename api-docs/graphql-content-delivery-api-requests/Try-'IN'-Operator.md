---
title: "Try 'In' Operator"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/in-operator
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'In' Operator

**** `/stacks/apiKey/explore`

Get entries in which the value of a field matches any of the given values. This parameter will compare field values of entries to that of the values provided in the condition.

**Example**: In the **Product** content type, you have a field named **Size**. If, for instance, you need to retrieve all the entries where the value of this field is one among the given set of values, your query will look as follows:

```
query {
  all_product(
    where: {
      size_in: [8, 16, 32]
    }) {
    items {
      title
      color
      size
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query and will include details of just the 'Title,' 'Size,' and ‘Color’ fields.

