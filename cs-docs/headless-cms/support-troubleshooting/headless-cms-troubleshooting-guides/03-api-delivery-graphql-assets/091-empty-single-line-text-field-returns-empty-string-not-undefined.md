---
title: "Empty Single Line Text Field Returns Empty String, Not undefined"
description: "Empty Single Line Text Field Returns Empty String, Not undefined"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/091-empty-single-line-text-field-returns-empty-string-not-undefined
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csd37d877102297a91
---

# Empty Single Line Text Field Returns Empty String, Not undefined

When a Single Line Text field is left empty in an entry and the entry is fetched via the CDA, the field is returned as an empty string (““) in the response instead of being absent or returning undefined. This differs from the expectation that an empty field would be omitted.

**Root Cause**

Empty Single Line Text fields are intentionally stored and returned as empty strings by the Contentstack CDA. This ensures a consistent, predictable response structure where all declared fields in the content type schema are always present in the API response, regardless of whether content has been entered. Returning “” instead of omitting the field prevents null reference errors in front-end applications that expect the field to always exist.

**Resolution**

This is expected platform behavior and is not a bug. To handle empty Single Line Text fields in the application:

1.  Check for empty string (““) rather than null or undefined when evaluating whether a Single Line Text field has content.
2.  Implement a utility function that normalizes empty strings to null or undefined if the application requires that distinction.
3.  Do not rely on field absence as a signal for empty content - use explicit empty string checks instead.

After updating the application’s field evaluation logic to check for empty strings, confirm that empty Single Line Text fields are correctly identified and handled without runtime errors.
