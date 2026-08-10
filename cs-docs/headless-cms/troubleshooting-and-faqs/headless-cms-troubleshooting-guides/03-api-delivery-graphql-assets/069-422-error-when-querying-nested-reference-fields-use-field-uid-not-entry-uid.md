---
title: "422 Error When Querying Nested Reference Fields - Use Field UID, Not Entry UID"
description: "422 Error When Querying Nested Reference Fields - Use Field UID, Not Entry UID"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/069-422-error-when-querying-nested-reference-fields-use-field-uid-not-entry-uid
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs53b89869d108f702
---

# 422 Error When Querying Nested Reference Fields - Use Field UID, Not Entry UID

A CDA request returns a 422 error when attempting to filter on a nested reference field. The query structure places entry UIDs directly inside the filter parameter instead of resolving the reference field first.

**Root Cause**

When querying nested reference fields in the Delivery API, the filter must reference the field UID of the nested reference, not the UID of the referenced entry. Passing entry UIDs directly into nested query parameters produces an invalid query structure that the API rejects with a 422 error.

**Resolution**

1.  Identify the field UID of the reference field within the content type (not the UID of the referenced entry).
2.  Structure the query filter using the field UID path, for example: query\[reference\_field\_uid\]\[entry\_uid\]\[$in\]\[\]=value
3.  Refer to the Contentstack documentation for Reference Search (Equals) for the correct query parameter format.
4.  Test the corrected query and confirm a valid response is returned.

After correcting the query structure to use field UIDs, re-run the request. If the API returns a valid response without a 422 error, the query syntax is correct.
