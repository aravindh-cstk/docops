---
title: "Try 'Less Than Or Equal To' Operator within Group"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/less-than-or-equal-to-operator-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Less Than Or Equal To' Operator within Group


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

#### Less Than Or Equal To Operator within Group

Get entries in which the value of a field is lesser than or equal to the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field are less than or equal to ‘30’, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_lte: 30
      }
    }) {
    items {
      title
      color
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.
