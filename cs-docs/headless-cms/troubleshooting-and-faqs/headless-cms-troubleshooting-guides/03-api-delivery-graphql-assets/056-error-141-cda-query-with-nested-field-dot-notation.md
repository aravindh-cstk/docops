---
title: "Error 141 - CDA Query with Nested Field Dot Notation"
description: "Error 141 - CDA Query with Nested Field Dot Notation"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/056-error-141-cda-query-with-nested-field-dot-notation
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs483b413a1f39d952
---

# Error 141 - CDA Query with Nested Field Dot Notation

A CDA query with a filter on a nested field using dot notation returns error 141: ‘Failed to fetch entries. Please try again with valid parameters.’ The query format appears correct.

**Root Cause**

The error occurs because the filter is attempting to query a nested field path (for example, category.category) but the field is defined as a reference or group, which is not directly queryable using simple dot notation in a JSON query string. The CDA query parser rejects the path as invalid. Reference fields must be queried using their specific query operator (for example, $in with the referenced entry UID), not a value equality filter on a nested path.

**Resolution**

1.  For filtering on a reference field’s value, use the $in operator with the referenced entry UID instead of the nested field value.
2.  For filtering on an inner field of a group field, use the full dot-notation path within the query JSON object, encoded correctly in the URL.
3.  Example for reference field: query={“category.uid”:{“$in”:\[“blt12345”\]}} rather than query={“category.category”:“value”}.
4.  Test the corrected query format in the GraphQL Explorer or via cURL before integrating into the application.

After correcting the query format, re-run the request and confirm entries are returned without error 141.
