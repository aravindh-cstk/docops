---
title: "Try 'Search Referenced Entries from Multiple Content Types'"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/try-search-referenced-entries-from-multiple-content-types
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-29
---

# Try 'Search Referenced Entries from Multiple Content Types'

**** `/stacks/apiKey/explore`

Get entries having values based on referenced fields. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve all entries that satisfy query conditions made on referenced fields that refer to multiple content types.

**Example**: In the **Product** content type, we have a multi content type Reference field named **Frequently Bought Together**. This Reference field refers to entries of the following content types: **Electronics** and **Kitchen Appliances**.

Let us use the **MATCH** operator to search entries of the two referenced content types: **Electronics** and **Kitchen****Appliances** on the basis of their **Title** field. The “Match” operator filters the entries to return only the entries that match the specified condition(s). You can enter the following values for the Match operator:

- ALL: The ALL option returns only those entries that match all the conditions specified
- ANY: The ANY option returns only those entries that match any one of the conditions specified

If you do not specify the MATCH operator, then the query uses the ALL option by default.

To fetch the referenced entries where the value of the **Title** field is one among the following: **Sony Bravia LED Smart TV** and **Glenmark Cooktop**, set the MATCH operator to ANY. Your query will appear as follows:

```
query {
  all_product(
    where: {
      frequently_bought_together: {
        MATCH: ANY,
        electronics: {
          title: "Sony Bravia LED Smart TV"
        },
        kitchen_appliances: {
          title: "Glenmark Cooktop"
        }
      }
    }) {
    items {
      title
      frequently_bought_togetherConnection {
        edges {
          node {
            ... on KitchenAppliances {
              title
              kitchen_appliance_details
            }
            ... on Electronics {
              title
              appliance_details
            }
          }
        }
      }
    }
  }
}
```

The response body will include all entries of the Electronics and Kitchen Appliances content types that satisfy the query, and will include details of just the “Title” field of these content types. Similarly, all the query operators listed in this guide can be applied to search based on the values of referenced fields.

**Note**: Only up to **three** levels deep of referenced fields can be used within the where argument to filter the requested entries.

