---
title: "Try 'In' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/in-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-30
---

# Try 'In' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### In Operator within Modular Blocks

Get entries where the value of a field within Modular Blocks matches any of the given values. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Blocks field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Deals block, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the values for the Deal Name field are 'Christmas Deal’, ‘Summer Deal', and ‘Independence Day Deal’, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        deals: {
          deal_name_in: [
            "Christmas Deal", "Summer Deal", "Independence Day Deal"
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

