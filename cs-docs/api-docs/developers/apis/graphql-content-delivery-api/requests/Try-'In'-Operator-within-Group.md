---
title: "Try 'In' Operator within Group"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/in-operator-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'In' Operator within Group


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

#### In Operator within Group

Get entries where the value of a field, within a Group field, matches any of the given values. This parameter will compare field values of entries to that of the values provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Card Type**. If, for instance, you want to retrieve the entries in which the values for the Card Type field are ‘Credit Card’ and 'Debit Card', your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        card_type_in: ["Credit Card", "Debit Card"]
      }
    }) 
    {
      items {
        title
        color
      }
    }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the ‘Title’ and ‘Color’ fields.
