---
title: "Try 'OR' Operator within Group"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/or-operator-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'OR' Operator within Group

**** `/stacks/apiKey/explore`

#### OR Operator within Group

Get all entries that satisfy at least one of the given conditions provided in the OR query. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a field named **Card Type**. If, for instance, you want to retrieve the entries where either the value for Card Type is ‘Debit Card’ or ‘Credit Card’, your query will look as follows:

```
query {
  all_product(
    where: {
      OR: [
        {
          bank_offers: {
            card_type: "Credit Card"
          }
        },
        {
          bank_offers: {
            card_type: "Debit Card"
          }
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

