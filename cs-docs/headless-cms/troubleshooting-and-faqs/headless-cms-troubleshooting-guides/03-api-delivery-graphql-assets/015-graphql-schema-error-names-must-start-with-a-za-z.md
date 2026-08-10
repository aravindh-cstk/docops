---
title: "GraphQL Schema Error: Names Must Start with [_a-zA-Z]"
description: "GraphQL Schema Error: Names Must Start with [_a-zA-Z]"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/015-graphql-schema-error-names-must-start-with-a-za-z
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs0eb32e2087e2442f
---

# GraphQL Schema Error: Names Must Start with [_a-zA-Z]

GraphQL queries fail with an error message such as: “Names must start with \[\_a-zA-Z\] but ‘03VisaPanel’ does not.” This error prevents the field or content type from being included in the GraphQL schema.

**Root Cause**

GraphQL schema generation enforces that all type and field names conform to the identifier naming standard: they must begin with a letter (a–z, A–Z) or underscore (\_). Field UIDs or content type identifiers that begin with a number or contain special characters violate this convention and cause schema build failures.

**Resolution**

1.  Identify the field UID or content type name referenced in the error message.
2.  Rename the field UID or content type to begin with a letter or underscore. For example, rename “03VisaPanel” to “visa\_panel\_03” or “visaPanel03”.
3.  Save the content type and allow the GraphQL schema to regenerate.
4.  Re-run the query in the GraphQL Explorer or API client.

After renaming, confirm the schema no longer includes the naming error and the content type or field is accessible via GraphQL.
