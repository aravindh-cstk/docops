---
title: "Try 'Format' Parameter"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/format-parameter
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2023-03-30
---

# Try 'Format' Parameter

**** `/stacks/apiKey/explore`

Let’s get started by using a single format parameter to understand how these parameters function.

To convert an image placed on your Contenstack website from one format to another, use the format parameter. For example, we have set the format parameter to GIF in the following image transformation query.

```
query {
  all_assets(limit: 25) {
    total
    items {
        title
            url(transform: {format: GIF})
    }
  }
}
```

This query will convert the current image format to a GIF format.

