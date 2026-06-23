---
title: "Try 'OR' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/or-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-30
---

# Try 'OR' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### OR Operator within Modular Blocks

Get all entries that satisfy at least one of the given conditions provided in the OR query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** and **Rating** blocks. And, within the Deals and Rating blocks, we have the **Deal Name** and **Stars** fields, respectively. If, for instance, you want to retrieve the entries wherein either the value for Deal Name is ‘Christmas Deal’ and Stars is '2', respectively, your query will look as follows:

```
query {
  all_product(
    where: {
      OR: [
        {
          additional_info: {
            deals: {
              deal_name: "Christmas Deal"
            }
          }
        },
        {
          additional_info: {
            rating: {
              stars: 2
            }
          }
        }
      ]
    }) {
    items {
      additional_info {
        ... on ProductAdditionalInfoRelatedProducts {
          related_products {
            productsConnection {
              edges {
                node {
                  ... on Product {
                    title
                  }
                }
              }
            }
          }
        }
        ... on ProductAdditionalInfoRating {
          rating {
            stars
          }
        }
        ... on ProductAdditionalInfoDeals {
          deals {
            deal_name
            deal_details
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.

