---
title: "Content Type with Numeric-Only Name Fails GraphQL Queries"
description: "Content Type with Numeric-Only Name Fails GraphQL Queries"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/014-content-type-with-numeric-only-name-fails-graphql-queries
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cscce2dd5af38ad7cc
---

# Content Type with Numeric-Only Name Fails GraphQL Queries

Querying a content type through GraphQL fails when the content type UID or name consists entirely of numeric characters. The query does not return results, and an error is returned from the GraphQL endpoint.

**Root Cause**

GraphQL enforces strict naming conventions for schema types. Type names must begin with a letter or underscore (\[\_a-zA-Z\]) and cannot start with or consist solely of numeric characters. When a content type is named with only numbers, it violates GraphQL’s schema naming rules and cannot be represented as a valid type in the generated schema.

**Resolution**

1.  Navigate to the Content Type settings in the CMS.
2.  Rename the content type UID and display name to a value that begins with a letter or underscore.
3.  Save the updated content type.
4.  Retry the GraphQL query using the updated content type name.

After renaming the content type, execute the GraphQL query again. If the query returns results without a naming error, the content type name is now schema-compliant.
