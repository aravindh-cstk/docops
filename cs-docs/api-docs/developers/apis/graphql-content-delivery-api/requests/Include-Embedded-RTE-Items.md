---
title: "Include Embedded RTE Items"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/include-embedded-rte-items
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-29
---

# Include Embedded RTE Items


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

Get entries of a content type along with the comprehensive details of the embedded entries and assets referenced inside the [JSON Rich Text Editor](/docs/developers/json-rich-text-editor). This query uses inline fragments and relay specification to retrieve details of rich text editors that refer to multiple embedded items.

**Note**: You cannot filter the GraphQL query response based on embedded items or references inside an embedded entry.

You can specify the name of the content types to which the embedded entries belong under the embedded_itemsConnection field schema. To fetch embedded assets, provide the system-generated typename, SysAsset.

```
embedded_itemsConnection(skip: 1, limit: 3) {
          edges {
            node {
              ... on KitchenAppliances {
                title
                kitchen_appliance_price_in_usd
              }
              ... on SysAsset {
                title
              }
            }
          }
        }
```

Each node either specifies the referenced content type or the system-generated typename.

**Example**: In the **Product** content type, we have a **Cart Items** JSON Rich Text Editor field. This field stores information about products that you have already added to your cart (electronic appliances in this example), and also contains a company logo.

If, for instance, you want to retrieve the embedded product details inside this field (along with the company logo), your query will look as follows:

```
query {
  all_product {
    total
    items {
      title
      url
      cart_items {
        embedded_itemsConnection(skip: 1, limit: 3) {
          edges {
            node {
              ... on Electronics {
                title
                appliance_price_in_usd
                appliance_details
              }
              ... on SysAsset {
                title
                file_size
              }
            }
          }
        }
      }
    }
  }
}
```

**Note**: You can retrieve a maximum of **100** embedded items (entries or assets) in a single GraphQL API request.
