---
title: "Try 'Order by Asc' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/order-by-asc
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-02-17
---

# Try 'Order by Asc' Operator

**** `/stacks/apiKey/explore`

When fetching entries, you can sort them in the ascending order with respect to the value of the following system-defined fields in the response body:

- Created at (created_at_ASC)
- Updated at (updated_at_ASC)
- Published at (sys_published_at_ASC)

**Note**:

- The order by ASC operator can only be used on the ‘Created at’, ‘Updated at’, and 'Published at' system-defined fields. It is not applicable to any other fields.
- Reach out to our support team to enable the 'Published at' feature for your organization.

**Example**: In the **Product** content type, if you wish to sort the entries with respect to the date specified in the ‘Created at’ field, your query will look as follows:

```
query {
  all_product(
    order_by: [
      created_at_ASC
    ]
  ) {
    items {
      title
      price_in_usd
      color
    }
  }
}
```

The response body of this query will display all the entries of the Product content type that satisfy the query in an ascending order, including details of just the ‘Title’, ‘Color’, and ‘Price in USD’ fields.

