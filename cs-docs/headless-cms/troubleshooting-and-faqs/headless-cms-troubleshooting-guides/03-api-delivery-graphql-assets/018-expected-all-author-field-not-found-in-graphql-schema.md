---
title: "Expected all_author Field Not Found in GraphQL Schema"
description: "Expected all_author Field Not Found in GraphQL Schema"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/018-expected-all-author-field-not-found-in-graphql-schema
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs4829ddf61b8b091c
---

# Expected all_author Field Not Found in GraphQL Schema

The GraphQL schema documentation references an all\_author field, but the field cannot be found or queried in the target stack’s GraphQL environment. Queries using all\_author return an error or produce no results.

**Root Cause**

GraphQL schema types are generated dynamically based on content types present in the stack. The all\_author field is only generated if a content type with the UID “author” exists in the stack. If no such content type exists, the corresponding GraphQL type and field are not created.

**Resolution**

1.  Verify whether a content type with the UID “author” exists in the stack.
2.  If the content type does not exist, create it or confirm the correct UID of the content type intended for author data.
3.  Refresh the GraphQL Explorer to regenerate the schema after any content type changes.
4.  Re-run the query using the correct generated field name based on the actual content type UID.

After confirming or creating the content type with the correct UID, reload the GraphQL Explorer. If the corresponding field appears in the schema, the content type is correctly linked.
