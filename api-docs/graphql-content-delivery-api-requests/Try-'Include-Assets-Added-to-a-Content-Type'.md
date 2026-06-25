---
title: "Try 'Include Assets Added to a Content Type'"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/try-include-assets-added-to-a-content-type-
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-29
---

# Try 'Include Assets Added to a Content Type'

**** `/stacks/apiKey/explore`

Get entries of a content type along with the comprehensive details of an asset that has been used in the entries. This query uses [relay specification](https://relay.dev/docs/guides/graphql-server-specification/) to fetch asset details such as the title of an asset or its URL.

Specify the asset UID while retrieving the asset information. Subsequently, you need to append the Connection term to the asset UID as a postfix.

**Note**: You can use the skip and limit pagination parameters only while querying assets that have been marked as “Multiple”.

**Example**: In the **Product** content type, you need to retrieve all entries along with comprehensive details of the image stored within the **Images** field. To fetch only the first **five** assets while retrieving the entries, use the limit parameter.

Your query will look as follows:

```
query {
  all_product {
    items {
      title
      imagesConnection(limit: 5) {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  }
}
```

The response body of this query will include details of the ‘Title’ field of the Product content type and the ‘Title’ and ‘Description’ of the assets stored in the Images field. It will only return the first five assets.

