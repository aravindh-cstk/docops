---
title: "Nested Reference Filtering"
description: /stacks/apiKey/explore
url: developers/apis/graphql-content-delivery-api/requests/nested-reference-filtering
product: Contentstack
doc_type: api-request
audience:
  - developers
version: unknown
last_updated: 2025-03-10
---

# Nested Reference Filtering


**Method:** ``  
**Endpoint:** `/stacks/apiKey/explore`

Nested reference filtering allows you to filter referenced entries within a reference field, returning relevant entries matching specific criteria. This feature does not affect the parent or child documents, making it easier to retrieve only the necessary data.

**Note**: This is a plan-based feature, reach out to our [support](mailto:support@contentstack.com) team to enable this feature for your organization.

Consider a **Product**content type with a reference field named **Categories**, which refers to entries from another content type named **Category**.

You can use nested reference filtering to retrieve specific referenced entries based on certain conditions, such as:

- Fetch all Product entries where the referenced Category entries title matches Electronics.
- Further refine the referenced Category entries to include only those where the cost is $20 and above.

```
{
    all_product(
        where: {
            reference: {
                categories: {
                    section: "Electronics"
                }
            }
        }
    ) {
        items {
            title
            categoriesConnection(
              where: { 
                cost_gte: 20
              }
            ) {
                edges {
                    node {
                        ... on Category {
                           title
				section
				cost
                                description
                        }
                    }
                }
            }
        }
    }
}
```

**Note**: Nested reference filtering does not support **File**, **Reference**, or **JSON RTE** fields.
