---
title: "SCHEMA_BUILD_ERROR Caused by Field UID Conflicts with Internal GraphQL Types"
description: "SCHEMA_BUILD_ERROR Caused by Field UID Conflicts with Internal GraphQL Types"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/016-schema-build-error-caused-by-field-uid-conflicts-with-internal-graphql-types
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csfea04000f50eb67d
---

# SCHEMA_BUILD_ERROR Caused by Field UID Conflicts with Internal GraphQL Types

The GraphQL Explorer displays SCHEMA\_BUILD\_ERROR messages when running queries. The error is tied to a specific content type or field UID that conflicts with a reserved or internally generated GraphQL type name.

**Root Cause**

Contentstack auto-generates GraphQL types based on content type and field UIDs. When a UID such as link\_Where is used, it collides with system-internal GraphQL type names (for example, types used for where-clause filtering). This collision causes the schema build to fail.

**Resolution**

1.  Identify the content type or field UID mentioned in the SCHEMA\_BUILD\_ERROR.
2.  Rename the conflicting UID to avoid collision with system-internal GraphQL types. Examples of safe alternatives: change “link\_Where” to “custom\_link” or “my\_link\_type”.
3.  Save the content type and allow the schema to regenerate.
4.  Reload the GraphQL Explorer and confirm the SCHEMA\_BUILD\_ERROR is no longer present.

After renaming the field or content type UID, open the GraphQL Explorer. If queries execute without a SCHEMA\_BUILD\_ERROR, the conflict has been resolved.
