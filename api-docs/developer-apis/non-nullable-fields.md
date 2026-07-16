---
title: "GraphQL | Non-Nullable Fields"
description: Understand GraphQL non-nullable field behavior and how required Contentstack fields appear in generated schemas.
url: https://www.contentstack.com/docs/developer-apis/graphql-content-delivery-api/non-nullable-fields
product: Contentstack
doc_type: api-reference
audience:
  - developers
version: unknown
last_updated: 2026-06-02
---

# GraphQL | Non-Nullable Fields

In GraphQL, fields can be marked as mandatory (non-nullable), meaning they must always return a value. If a non-nullable field is queried and the API cannot provide data, it will return an error. This prevents unexpected null values in responses and ensures data integrity.

To enable strict type checks for non-nullable fields include the following header in your GraphQL API request:

```
x-graphql-strict-type-checks: true
```

**Note**: Reach out to our [support](mailto:support@contentstack.com) team to enable this feature for your organization.

When non-nullability is enabled, the GraphQL schema will reflect the strict type enforcement. Below is a comparison of how field types change:

| Field Type | GraphQL (Nullable) | GraphQL (Non-Nullable) |
| --- | --- | --- |
| Text | String | String! |
| Number | Int | Int! |
| Date | ISODate | ISODate! |
| Link | Link | Link! |
| Reference | [CTReferenceEdge] | [CTReferenceEdge!]! |
| System | EntrySystemField | EntrySystemField! |

Enabling non-nullable fields ensures more predictable API responses and prevents missing mandatory field data in queries.
