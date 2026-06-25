---
title: "Try 'AND' Operator within Group"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/and-operator-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'AND' Operator within Group

**** `/stacks/apiKey/explore`

#### AND Operator within Group

Get entries that satisfy all the conditions provided in the AND query. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have fields named **Card Type** and **Discount in Percentage**. If, for instance, you want to retrieve the entries wherein the value for Card Type is ‘Credit Card’ and ‘Discount in Percentage’ is '12', your query will look as follows:

```
query {
  all_product(
    where: {
      AND: [
        {
          bank_offers: {
            card_type: "Credit Card"
          }
        },
        {
          bank_offers: {
            discount_in_percentage: 12
          }
        }
      ]
    }) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Price in USD’ fields.

