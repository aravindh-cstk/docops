---
title: "CDA Always Returns Single-Value Fields as Arrays"
description: "CDA Always Returns Single-Value Fields as Arrays"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/102-cda-always-returns-single-value-fields-as-arrays
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs8c3ce62e5b8b2cef
---

# CDA Always Returns Single-Value Fields as Arrays

The Content Delivery API returns certain fields as arrays in the JSON response even when the field contains only a single value. This is unexpected for developers who anticipate a scalar value for single-entry fields.

**Root Cause**

This is intentional system design. The Contentstack CDA returns fields as arrays to ensure a consistent and predictable response structure across all locales and content variations. A field that contains one value in one locale may contain multiple values in another locale (for example, a multi-select or reference field). Using arrays for all such fields ensures the application code does not need to handle both scalar and array types for the same field depending on the locale or content state.

**Resolution**

This is expected platform behavior and cannot be changed. To handle single-value array fields in the application:

1.  Access the value using array index notation: field\[0\] to retrieve the first (and typically only) element.
2.  Implement a normalization utility that checks whether a field is a single-item array and extracts the scalar value where needed.
3.  Design application code to consistently treat these fields as arrays regardless of the number of values, which is the safest and most future-proof approach.

After updating the application to access field values using array notation, confirm that the expected values are retrieved correctly without type errors.
