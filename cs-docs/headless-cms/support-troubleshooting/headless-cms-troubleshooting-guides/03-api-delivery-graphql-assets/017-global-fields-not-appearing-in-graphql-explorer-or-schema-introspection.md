---
title: "Global Fields Not Appearing in GraphQL Explorer or Schema Introspection"
description: "Global Fields Not Appearing in GraphQL Explorer or Schema Introspection"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/017-global-fields-not-appearing-in-graphql-explorer-or-schema-introspection
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs26e398528168d56a
---

# Global Fields Not Appearing in GraphQL Explorer or Schema Introspection

Global fields configured in the CMS do not appear in the GraphQL Explorer schema or are not returned during schema introspection. Developers cannot query global field data via GraphQL despite the fields being visible in the CMS.

**Root Cause**

Global fields may temporarily not appear in the GraphQL schema due to a schema cache that has not yet refreshed, or because the global field has not been fully propagated to the GraphQL layer. In most cases the fields are present in the schema and become visible after a short propagation delay or page refresh.

**Resolution**

1.  Wait briefly and refresh the GraphQL Explorer to allow schema propagation to complete.
2.  Re-run the schema introspection query to confirm whether the global fields are now present.
3.  If fields remain missing, verify the global field is correctly referenced within a content type in the CMS.
4.  If the issue persists, contact Contentstack Support and request internal schema validation for the affected stack.

After refreshing the GraphQL Explorer, run an introspection query. If global fields appear in the returned schema, the propagation has completed successfully.
