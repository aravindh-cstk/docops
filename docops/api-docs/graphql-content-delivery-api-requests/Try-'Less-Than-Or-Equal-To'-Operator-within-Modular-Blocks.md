---
title: "Try 'Less Than Or Equal To' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/less-than-or-equal-to-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-30
---

# Try 'Less Than Or Equal To' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Less Than Or Equal To Operator within Modular Blocks

Get entries in which the value of a field is lesser than or equal to the value provided in the condition. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Rating** block. And, within this Rating block, we have a field named **Stars**. If, for instance, you want to retrieve the entries in which the values for the Stars field are less than or equal to ‘3’, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_lte: 3
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

