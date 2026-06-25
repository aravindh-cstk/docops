---
title: "Try 'Include Single Content Type Reference Fields'"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/include-single-content-type-reference-fields
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-29
---

# Try 'Include Single Content Type Reference Fields'

**** `/stacks/apiKey/explore`

Get entries of a content type along with the comprehensive details of the specified referenced entry. This query uses [relay specification](https://relay.dev/docs/guides/graphql-server-specification/) to retrieve the details of the entries referred in reference fields.

**Note**: You can use the skip and limit parameters while querying [Reference](../../../../../cs-docs/developers/create-content-types/reference.md) fields that refer to a single content type and have been marked as “Multiple”.

If your stack was created after **29th July, 2019**, then you will automatically be using the [upgraded Reference field](../../../../../cs-docs/developers/create-content-types/reference-field-upgradation.md) that refers to multiple content types. However, for older stacks with single content type referencing fields, you can still query the traditional Reference fields using relay specification logic.

**Example**: In the **Product** content type, there is a reference field called **Categories**, which refers entries of another content type named **Category**.

**Note**: When you query reference fields that refer to content types other than the first **100** available, the query will return an error in the response body of the GraphQL API request. If referenced entries are not published or have been deleted, then the query will return { edges: [] }.

To fetch all entries of the “Product” content type along with the corresponding referenced entry from the “Category” content type, you can run the following query:

```
query {
  all_product {
    total
    items {
      title
      categoriesConnection {
        totalCount
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

The totalCount field returns the number of referenced entries for a specific Reference field.

**Note**: Contentstack’s GraphQL queries can fetch referenced entries up to **three** levels deep.

