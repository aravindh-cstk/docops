---
title: "Try 'Exists' Operator within Group"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/exists-operator-within-group
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Exists' Operator within Group

**** `/stacks/apiKey/explore`

#### Exists Operator within Group

Get entries if the value of the field mentioned in the condition exists. This query is specifically for fields that are part of the Group field.

**Example**: In the **Product** content type, we have a Group field named **Bank Offers**. And, within this Group field, we have a subfield named **Discount in Percentage**. If, for instance, you want to retrieve the entries in which the values for the Discount in Percentage field exists, your query will look as follows:

```
query {
  all_product(
    where: {
      bank_offers: {
        discount_in_percentage_exists: true
      }
    }) {
    items {
      title
      color
      description
    }
  }
}
```

The response body of this query will display all the entries of the **Product** content type that satisfy the query, including details of just the ‘Title’, ‘Color’, and ‘Description’ fields.

