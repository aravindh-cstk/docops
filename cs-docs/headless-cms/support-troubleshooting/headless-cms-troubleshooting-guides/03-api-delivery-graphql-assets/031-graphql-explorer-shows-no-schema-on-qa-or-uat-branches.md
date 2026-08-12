---
title: "GraphQL Explorer Shows No Schema on QA or UAT Branches"
description: "GraphQL Explorer Shows No Schema on QA or UAT Branches"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/031-graphql-explorer-shows-no-schema-on-qa-or-uat-branches
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cscddb44a6fa596e36
---

# GraphQL Explorer Shows No Schema on QA or UAT Branches

The GraphQL Explorer displays no schema and returns errors when accessing QA or UAT branches. The main branch works correctly under the same credentials.

**Root Cause**

The GraphQL token being used does not have access permissions for the QA or UAT branch. Branch-specific access must be explicitly granted to the delivery token. A token configured only for the main branch cannot access other branches, causing the Explorer to show an empty schema for those branches.

**Resolution**

1.  Navigate to Settings > Tokens in the Contentstack dashboard.
2.  Select the delivery token being used for GraphQL access.
3.  Verify that the token includes access permissions for the QA and UAT branches.
4.  If the token does not have branch access, update the token’s permissions or create a new token scoped to the required branches.
5.  Reload the GraphQL Explorer and confirm the schema is now available for the QA and UAT branches.

After updating the token permissions, reload the GraphQL Explorer for the affected branches. If the schema appears and queries execute correctly, the token now has the required branch access.
