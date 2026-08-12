---
title: "Enabling Deeper Nested Reference Filtering with gql_max_reference_depth"
description: "Enabling Deeper Nested Reference Filtering with gql_max_reference_depth"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/022-enabling-deeper-nested-reference-filtering-with-gql-max-reference-depth
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csbcf71e720f08371b
---

# Enabling Deeper Nested Reference Filtering with gql_max_reference_depth

GraphQL queries that attempt to filter nested references beyond the default depth limit fail or return incomplete results. The default reference depth configuration does not support the level of nesting required by the query.

**Root Cause**

Contentstack’s GraphQL API has a default maximum reference depth limit. For use cases that require deeper nested reference filtering, the gql\_max\_reference\_depth configuration must be explicitly enabled for the organization by the Contentstack support or solutions team.

**Resolution**

1.  Contact Contentstack Support or your Solutions Architect and request that the gql\_max\_reference\_depth configuration be enabled for your organization.
2.  After enablement, update the GraphQL query to utilize deeper nested reference filtering.
3.  Verify behavior by running the updated query and confirming that nested references are returned correctly.

After the configuration is enabled, re-run the nested reference query. If the expected nested reference data is returned without errors, the depth configuration is active.
