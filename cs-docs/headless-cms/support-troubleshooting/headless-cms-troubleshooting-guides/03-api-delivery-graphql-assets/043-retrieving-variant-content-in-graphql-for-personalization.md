---
title: "Retrieving Variant Content in GraphQL for Personalization"
description: "Retrieving Variant Content in GraphQL for Personalization"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/043-retrieving-variant-content-in-graphql-for-personalization
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs25d9adee233c1338
---

# Retrieving Variant Content in GraphQL for Personalization

After configuring personalization and variants in the CMS, there is no variant filter available in the GraphQL Explorer’s where clause. Variant-specific content cannot be retrieved through the standard GraphQL query interface.

**Root Cause**

Variant filters for personalized content are not available in the GraphQL Explorer interface. Personalization variant retrieval is not supported through the standard where clause in GraphQL queries.

**Resolution**

1.  Use a direct API request (REST or GraphQL) and include the variant information in a special HTTP header instead of the query parameters.
2.  Refer to the Contentstack Personalization documentation for the correct header name and format required to retrieve variant-specific content.
3.  Implement the header-based variant retrieval in the application code rather than relying on the GraphQL Explorer interface.

After adding the required variant header to the API request, verify that the response returns the expected variant version of the content. If the variant-specific content is returned, the header configuration is correct.
