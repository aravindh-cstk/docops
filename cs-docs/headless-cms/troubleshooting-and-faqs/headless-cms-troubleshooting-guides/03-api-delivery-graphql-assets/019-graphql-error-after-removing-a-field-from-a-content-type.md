---
title: "GraphQL Error After Removing a Field from a Content Type"
description: "GraphQL Error After Removing a Field from a Content Type"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/019-graphql-error-after-removing-a-field-from-a-content-type
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs49b7b9887cc24ae9
---

# GraphQL Error After Removing a Field from a Content Type

After removing a field from a content type, a GraphQL query that previously referenced that field now returns an error. The query fails even though the content type itself still exists.

**Root Cause**

When a field is removed from a content type, it is also removed from the GraphQL schema. Any existing query that references the removed field becomes invalid because the field no longer exists in the schema. This is expected GraphQL behavior - the schema is the source of truth for valid query fields.

**Resolution**

1.  Update the GraphQL query to remove the reference to the deleted field.
2.  If the field data is still required, restore the field in the content type via the CMS before re-running the query.
3.  Validate the updated query against the current schema using the GraphQL Explorer before deploying.

After updating the query, execute it in the GraphQL Explorer. If the query runs without errors, the field reference has been correctly removed or the schema has been restored.
