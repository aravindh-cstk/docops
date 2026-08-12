---
title: "API Calls Return Mismatched _version Values for List vs Single Entry Requests"
description: "API Calls Return Mismatched _version Values for List vs Single Entry Requests"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/087-api-calls-return-mismatched-version-values-for-list-vs-single-entry-requests
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs46ad52010da6fbb8
---

# API Calls Return Mismatched _version Values for List vs Single Entry Requests

Fetching a list of entries via the CDA returns different \_version values compared to fetching the same entry individually. The same entry appears to have a different version depending on which request is used.

**Root Cause**

The list request is being made without an access token (delivery token), causing the request to return unauthenticated results, which may reflect a different or default version of the entry. The single-entry request includes the access token and therefore returns the correct, authenticated version. Different authentication states can produce different responses for the same entry.

**Resolution**

1.  Add the correct delivery access token to the headers of the list request: access\_token: <your\_delivery\_token>
2.  Ensure all API requests - both list and single-entry - include the access token and target the same environment.
3.  Re-run both requests and confirm that the \_version values are now consistent.

After adding the access token to the list request, compare the \_version values from the list and single-entry responses. If they now match, the authentication mismatch has been resolved.
