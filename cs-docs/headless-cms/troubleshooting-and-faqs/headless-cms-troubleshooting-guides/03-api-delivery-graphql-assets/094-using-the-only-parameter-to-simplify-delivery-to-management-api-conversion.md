---
title: "Using the only[] Parameter to Simplify Delivery-to-Management API Conversion"
description: "Using the only[] Parameter to Simplify Delivery-to-Management API Conversion"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/094-using-the-only-parameter-to-simplify-delivery-to-management-api-conversion
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs2f631471e0eab22f
---

# Using the only[] Parameter to Simplify Delivery-to-Management API Conversion

Entries retrieved from the Delivery API require extensive manual restructuring before they can be used in Management API update requests. The response includes fields and metadata that the Management API does not accept or requires in a different format.

**Root Cause**

The Delivery API and Management API return and accept different response structures by design. The Delivery API includes resolved references, environment metadata, and flattened fields that are not part of the Management API’s update schema. Fetching the full entry from the Delivery API and passing it directly to the Management API without restructuring produces errors.

**Resolution**

1.  Use the only\[\] parameter in the Delivery API request to fetch only the specific fields required for the Management API update, reducing the need for manual restructuring.
2.  Example: GET /v3/content\_types/{uid}/entries/{entry\_uid}?only\[BASE\]\[\]=title&only\[BASE\]\[\]=description
3.  Alternatively, fetch the entry via the CMA (Management API) using a management token to retrieve it in the native management schema, which is directly compatible with update requests.

**Note - Excluding Metadata Fields (updated\_by, updated\_at, created\_by, etc.)**

If the goal is to receive cleaner API responses without system metadata fields (such as updated\_by, updated\_at, created\_by, created\_at, \_version), the REST API does not support excluding these fields natively. However, GraphQL provides a direct solution: because GraphQL uses explicit field selection, metadata fields can simply be omitted from the query selection set and will not appear in the response. This also eliminates the need for long URL query strings when selecting specific fields.

After using the only\[\] parameter or switching to a CMA fetch, confirm that the response structure requires minimal transformation before being used in a Management API update call.
