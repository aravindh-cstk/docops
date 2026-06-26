---
title: "Try 'Search Referenced Entries from a Single Content Type'"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/search-referenced-entries-from-a-single-content-type
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-28
---

# Try 'Search Referenced Entries from a Single Content Type'

**** `/stacks/apiKey/explore`

Get entries having values based on referenced fields. This query retrieves all entries that satisfy query conditions made on referenced fields that refer to a single content type.

**Note**: If your stack was created after **29th July, 2019**, then you will automatically be using the [upgraded Reference field](../../../../../cs-docs/developers/create-content-types/reference-field-upgradation.md) that refers to multiple content types. However, for older stacks with single content type referencing fields, you can still query the traditional Reference fields using relay specification logic.

Let us use the equals operator to search based on the **Title** field of the referenced content type, **Category**.

**Example**: In the Product content type, if you wish to retrieve all entries that have their category title set to ‘Mobiles’, your query will look as follows:

```
query {
  all_product(
    where: {
      categories: {
        title: "Mobiles"
      }
    }) {
    total
    items {
      title
      categoriesConnection {
        edges {
          node {
            title
          }
        }
      }
    }
  }
}
```

The response body will include all entries of the Product content type that satisfy the query, and will include details of just the ‘Title’ field of the Category content type. Similarly, all the query operators listed in this guide can be applied to search based on the values of referenced fields.

**Note**: Only up to **three** levels deep of referenced fields can be used within the where argument to filter the requested entries.

