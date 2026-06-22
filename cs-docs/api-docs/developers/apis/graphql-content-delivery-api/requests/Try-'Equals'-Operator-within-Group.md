---
title: "Try 'Equals' Operator within Group"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/equals-operator-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-29
---

# Try 'Equals' Operator within Group


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

#### Equals Operator within Group

Get entries where the value of a field within a Group field matches the condition in the query. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers** and, within this Group field, we have a subfield named **Card Type**. If, for instance, you want to retrieve the entries in which the value for the Card Type field is **Credit Card**, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        card_type: "Credit Card"
      }
    }) {
    items {
      price_in_usd
      description
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and include details of just the ‘Price in USD’ and ‘Description’ fields.
