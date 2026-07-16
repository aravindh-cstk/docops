---
title: "Try 'Not Equals' Operator within Group"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/not-equals-operator-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Not Equals' Operator within Group

**** `/stacks/apiKey/explore`

#### Not-equals Operator within Group

Get entries where the value of a field does not match the value provided in the condition. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers** and, within this Group field, we have a subfield named **Card Type**. If, for instance, you want to retrieve the entries in which the value for the **Card Type** field is **NOT** 'Debit Card', your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        card_type_ne: "Debit Card"
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

