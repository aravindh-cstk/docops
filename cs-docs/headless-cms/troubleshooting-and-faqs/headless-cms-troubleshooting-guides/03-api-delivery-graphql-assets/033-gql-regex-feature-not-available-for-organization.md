---
title: "gql_regex Feature Not Available for Organization"
description: "gql_regex Feature Not Available for Organization"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/033-gql-regex-feature-not-available-for-organization
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs3f512a944361c7f1
---

# gql_regex Feature Not Available for Organization

The gql\_regex option is not available or functional in the GraphQL Explorer or API for the organization. Regex-based filtering in GraphQL queries does not work even when the syntax is correct.

**Root Cause**

The gql\_regex feature is not enabled by default for all organizations. It must be explicitly enabled at the organization level by the Contentstack support team. Additionally, after the feature is enabled, content types must be re-saved to refresh the GraphQL schema and make the regex capability active.

**Resolution**

1.  Contact Contentstack Support and request that the gql\_regex feature be enabled for your organization.
2.  After receiving confirmation that the feature is enabled, navigate to the affected content types in the CMS.
3.  Re-save each affected content type (even without changes) to trigger a schema refresh.
4.  Re-run the GraphQL query using the regex filter and confirm the expected results are returned.

After enabling the feature and re-saving the content types, execute a GraphQL query with a regex filter. If results match the regex pattern, the feature is active for the organization.
