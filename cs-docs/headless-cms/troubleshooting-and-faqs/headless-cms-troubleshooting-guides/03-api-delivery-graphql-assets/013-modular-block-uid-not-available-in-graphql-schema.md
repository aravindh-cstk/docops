---
title: "Modular Block UID Not Available in GraphQL Schema"
description: "Modular Block UID Not Available in GraphQL Schema"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/013-modular-block-uid-not-available-in-graphql-schema
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs18aaa788ad516f9b
---

# Modular Block UID Not Available in GraphQL Schema

The REST Delivery API returns a uid field for modular block instances within an entry, but the same uid is not available when querying via the GraphQL API. Teams relying on the block UID for client-side rendering or block identification cannot retrieve it through GraphQL.

**Root Cause**

The UID associated with modular block instances is an internal identifier used by the Contentstack platform for block positioning and management purposes. Because this identifier is not part of the content type schema, it is intentionally not exposed in the GraphQL schema. The GraphQL API only surfaces fields that are defined in the content type schema. REST returns this field as an implementation detail of the JSON structure, but GraphQL enforces strict schema compliance.

**Resolution**

This is expected behavior by design. The modular block instance UID is not available via GraphQL and cannot be queried through the schema.

1.  If client-side block identification is required, add a dedicated identifier field (for example, a text or short uid field) to the modular block definition in the content type schema. Populate this field in entries to provide a stable, schema-defined identifier accessible via both REST and GraphQL.
2.  If the internal block UID is essential for the use case, use the REST Delivery API instead of GraphQL for queries that require this field.

After adding a schema-defined identifier field to the modular block, verify it is accessible in the GraphQL Explorer and returned correctly in the query response.
