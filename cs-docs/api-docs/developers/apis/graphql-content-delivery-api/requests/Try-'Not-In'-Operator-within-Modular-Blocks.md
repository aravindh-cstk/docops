---
title: "Try 'Not In' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/array-not-equals-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-30
---

# Try 'Not In' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Not In Operator within Modular Blocks

Get entries where the values of the fields within Modular Blocks match the condition in the query. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Deals block, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the values for the Deal Name field are NOT 'Christmas Deal’, ‘Independence Day Deal’, and ‘Summer Deal', your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name_nin: [
            "Summer Deal", "Christmas Deal", "Independence Day Deal"
          ]
        }
      }
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

