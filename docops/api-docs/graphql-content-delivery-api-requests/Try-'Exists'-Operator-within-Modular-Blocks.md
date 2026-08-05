---
title: "Try 'Exists' Operator within Modular Blocks"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/exists-operator-within-modular-blocks
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-29
---

# Try 'Exists' Operator within Modular Blocks

**** `/stacks/apiKey/explore`

#### Exists Operator within Modular Blocks

Get entries if value of the field mentioned in the condition exists. This query uses [inline fragments](https://graphql.org/learn/queries/#inline-fragments) to retrieve values of fields that are part of any block within a Modular Block field.

**Example**: In the **Product** content type, we have a Modular Blocks field named **Additional Info** that contains the **Deals** block. And, within this Block field, we have a field named **Deal Name**. If, for instance, you want to retrieve the entries in which the value for the **Stars** field exists, your query will look as follows:

```
query {
  all_product(
    where: {
      additional_info: {
        rating: {
          stars_exists: true
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
                  title
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

The response body of this query will display details of the ‘Deal Name’ and ‘Deal Details’ fields of the ‘Deals’ block.

