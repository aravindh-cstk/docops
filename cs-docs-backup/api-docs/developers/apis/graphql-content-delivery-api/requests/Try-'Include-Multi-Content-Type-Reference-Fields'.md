---
title: "Try 'Include Multi Content Type Reference Fields'"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/try-include-multi-content-type-reference-fields
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-29
---

# Try 'Include Multi Content Type Reference Fields'

**** `/stacks/apiKey/explore`

Get entries of a content type along with the comprehensive details of the specified referenced entries. This query uses inline fragments and relay specification to retrieve details of entries referring to multiple content types.

**Note**: Contentstack’s GraphQL queries can fetch referenced entries up to three levels deep.

Within the inline fragments section, you need to specify the name of the content type. Subsequently, you need to append the Connection term as postfix for the content type UID.

```
{reference_field_UID}Connection {
        totalCount
        edges {
          node {
            ... on {Referenced_Content_Type_Name_in_PascalCase} {
              {field_name}
            }
          }
        }
      }
```

The node specifies the referenced content types related to the parent content type.

**Example**: In the **Product** content type, we have a multi content type Reference field named **Frequently Bought Together**. This Reference field refers to entries of the following content types: **Electronics** and **Kitchen Appliances**.

So, for instance, if you need to fetch referenced entries from both content types, **Electronics** and **Kitchen Appliances**, your query will look as follows:

```
query {
  all_product {
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

**Note**: When you query reference fields that refer to content types other than the first **100** available, the response body will return an error. If referenced entries are not published or have been deleted, then the query will return { edges: [] }.

