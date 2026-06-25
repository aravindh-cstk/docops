---
title: "Get Entries by Referenced Asset"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/get-entries-by-referenced-asset
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-29
---

# Get Entries by Referenced Asset

**** `/stacks/apiKey/explore`

Get entries by using asset data to query a content type.

**Example**: In the **Product** content type, if you wish to retrieve all referenced entries that have an image stored by the name **in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg** within the **Images** field, your query will look as follows:

```
query {
  all_product(
    where: {
      images: {
        title: "in-galaxy-note-5-n9208-sm-n9208zdvins-000000003-back-gold.jpg"
      }
    }) {
    total
    items {
      title
      categoriesConnection {
        edges {
          node {
            ...on Category {
              title
            }
          }
        }
      }
    }
  }
}
```

The response body of this query will include all entries of the **Product** content type that satisfy the query, and will include details of just the 'Title' field of the **Category** content type.

**Note**: You cannot query content types based on the URL field of an asset.

