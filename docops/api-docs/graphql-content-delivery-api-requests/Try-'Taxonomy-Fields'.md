---
title: "Try 'Taxonomy Fields'"
description: /stacks/apiKey/explore
url: developer-apis/graphql-content-delivery-api-requests/try-taxonomy-fields
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2024-04-17
---

# Try 'Taxonomy Fields'

**** `/stacks/apiKey/explore`

##### Taxonomy Fields

Get the taxonomy UID and term UID from the entries of a specific content type.

**Example**: In the **Product** content type, you have a taxonomy field. If, for instance, you want to get a list of all entries where terms are applied, your GraphQL query will look as follows:

```
query {
  taxonomies {
    all_product {
      items {
        title
        taxonomies {
          taxonomy_uid 
          term_uid
        }
      }
    }
  }
}
```

