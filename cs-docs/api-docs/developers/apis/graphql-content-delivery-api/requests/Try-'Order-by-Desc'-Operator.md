---
title: "Try 'Order by Desc' Operator"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/order-by-desc
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-02-17
---

# Try 'Order by Desc' Operator


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

When fetching entries, you can sort them in the descending order with respect to the value of the following system-defined fields in the response body:

- Created at (created_at_DESC)
- Updated at (updated_at_DESC)
- Published at (sys_published_at_DESC)

**Note**:

- The order by DESC operator can only be used on the ‘Created at’, ‘Updated at’, and 'Published at' system-defined fields. It is not applicable to any other fields.
- Reach out to our support team to enable the 'Published at' feature for your organization.

**Example**: In the **Product** content type, if you wish to sort the entries with respect to the date specified in the ‘Updated at’ field, your query will look as follows:

```
query {
  all_product(
    order_by: [
      updated_at_DESC
    ]
  ) {
    items {
      title
      price_in_usd
    }
  }
}
```

The response body of this query will display all the entries of the **Product** content type that satisfy the query in a descending order, including details of just the ‘Title’ and ‘Price in USD’ fields.
