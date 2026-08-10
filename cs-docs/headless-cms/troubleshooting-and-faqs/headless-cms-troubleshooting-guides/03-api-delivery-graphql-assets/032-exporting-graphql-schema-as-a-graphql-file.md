---
title: "Exporting GraphQL Schema as a .graphql File"
description: "Exporting GraphQL Schema as a .graphql File"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/032-exporting-graphql-schema-as-a-graphql-file
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csadf06e0657ba7f13
---

# Exporting GraphQL Schema as a .graphql File

There is no built-in export button in the GraphQL Explorer to download the schema as a .graphql file. Developers need the full schema definition for tooling, code generation, or offline reference.

**Root Cause**

The Contentstack GraphQL Explorer does not natively support exporting the schema as a downloadable .graphql file. However, the full schema can be retrieved programmatically using a GraphQL introspection query, which is the standard approach for schema extraction.

**Resolution**

1.  Run a full GraphQL introspection query against the stack’s GraphQL endpoint to retrieve the complete schema definition.
2.  Use a tool such as get-graphql-schema, graphql-codegen, or Apollo CLI to convert the introspection JSON result into a .graphql SDL file.
3.  Save the output as a .graphql file for use in development tooling, type generation, or documentation.

After running the introspection query and converting the output, open the generated .graphql file and verify that it contains the expected type definitions and queries. If the schema is complete, the export has succeeded.
