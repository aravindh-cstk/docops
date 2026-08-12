---
title: "Querying Entries by Taxonomy Terms via the Delivery API"
description: "Querying Entries by Taxonomy Terms via the Delivery API"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/096-querying-entries-by-taxonomy-terms-via-the-delivery-api
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs67f80ea9f0e4b76d
---

# Querying Entries by Taxonomy Terms via the Delivery API

There is no clear guidance on how to filter or retrieve entries based on specific taxonomy terms using the CDA REST API.

**Root Cause**

Taxonomy-based filtering is available in the CDA but requires the correct query parameter syntax to target taxonomy terms. The query structure differs from standard field-based filtering.

**Resolution**

1.  Use the taxonomies.term\_uid query parameter in the CDA request to filter entries by a specific taxonomy term.
2.  Example: GET /v3/content\_types/{uid}/entries?query={“taxonomies.term\_uid”:{“$in”:\[“term\_uid\_value”\]}}
3.  Refer to the Contentstack Taxonomy documentation for the full list of supported query operators for taxonomy filtering.
4.  Combine taxonomy filters with other query parameters as needed using standard and/or operators.

After applying the taxonomy term filter, execute the API request and confirm that only entries tagged with the specified taxonomy term are returned.
