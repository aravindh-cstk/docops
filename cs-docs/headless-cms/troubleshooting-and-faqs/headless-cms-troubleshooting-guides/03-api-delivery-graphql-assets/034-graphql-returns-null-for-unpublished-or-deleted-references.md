---
title: "GraphQL Returns Null for Unpublished or Deleted References"
description: "GraphQL Returns Null for Unpublished or Deleted References"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/034-graphql-returns-null-for-unpublished-or-deleted-references
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs48764adb92906a2e
---

# GraphQL Returns Null for Unpublished or Deleted References

GraphQL responses return null values or empty arrays for reference fields even though references are configured in the entries. The references exist in the CMS but do not appear in the GraphQL response.

**Root Cause**

Contentstack’s GraphQL API intentionally returns only published referenced entries. If a referenced entry is unpublished, in draft state, or has been deleted, GraphQL will return null or an empty array for that reference field. This is by design to ensure the Delivery API only surfaces live, published content.

**Resolution**

1.  Identify which referenced entries are returning null in the GraphQL response.
2.  Navigate to those entries in the CMS and verify their publish status in the target environment.
3.  Publish any entries that are in draft or unpublished state.
4.  Re-run the GraphQL query and confirm that the previously null reference fields now return data.

After publishing the referenced entries, execute the GraphQL query again. If the previously null fields now return data, the references are live and being resolved correctly.
