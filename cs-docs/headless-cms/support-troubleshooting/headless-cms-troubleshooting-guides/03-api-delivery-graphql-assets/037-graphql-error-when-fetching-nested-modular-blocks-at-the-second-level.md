---
title: "GraphQL Error When Fetching Nested Modular Blocks at the Second Level"
description: "GraphQL Error When Fetching Nested Modular Blocks at the Second Level"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/037-graphql-error-when-fetching-nested-modular-blocks-at-the-second-level
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csea56d9d8c8d61581
---

# GraphQL Error When Fetching Nested Modular Blocks at the Second Level

GraphQL queries fail when attempting to retrieve nested modular blocks at the second level of nesting. The CMS structure is valid and the REST API returns the expected data, but GraphQL fails specifically on the nested modular block.

**Root Cause**

Querying nested modular blocks (modular blocks within modular blocks) via GraphQL requires specific query structuring that differs from REST API access patterns. Incorrect query structure for the second-level modular block type causes the GraphQL request to fail.

**Resolution**

1.  Review the GraphQL query for the nested modular block and ensure the selection set correctly targets the second-level block type using inline fragments.
2.  Use GraphQL inline fragments (… on BlockTypeName) to specify the fields for each modular block type at each nesting level.
3.  Validate the query structure in the GraphQL Explorer before running it in the application.
4.  If the query structure appears correct but the error persists, contact Contentstack Support and request a troubleshooting session to validate the specific query and schema interaction.

After updating the query to use correct inline fragments for the nested modular block type, re-run it in the GraphQL Explorer. If the nested modular block data is returned, the query structure is correct.
