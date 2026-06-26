---
title: "Try 'Pagination'"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/pagination
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try "Pagination"

**** `/stacks/apiKey/explore`

When fetching all the entries of a particular content type, the GraphQL API allows you to provide arguments that paginate the response body.

If you have more than 100 items in your response, you can get the rest of the items in batches using the **skip** parameter in subsequent requests. The skip parameter helps paginate the output of the request.

**Example**: In the **Product** content type, we have a field named **Price in USD**. Now, you want to retrieve all the entries in the content type in which the field exists.

If you get more than 100 items, you can get the rest of the items in batches using the **skip: 2** parameter in subsequent requests. You can also use the **limit: 7** parameter to get 7 items per page instead of getting all the 100 items at once.

The pagination query will look as follows:

```
query {
  all_product(
    limit: 7,
    skip: 2
  ) {
    total
    items {
      title
      price_in_usd
    }
  }
}
```

The **total** field will display the number of entries where the ‘Price in USD’ field exists for a product within the response body, including details of just the ‘Title’, ‘Brand’, and ‘Price in USD’ fields. However, through the use of the skip and limit parameters, the response body will now only show the first seven matching entries initially.

