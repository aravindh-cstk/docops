---
title: "500 Errors from Malformed sort Field Payload"
description: "500 Errors from Malformed sort Field Payload"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/055-500-errors-from-malformed-sort-field-payload
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs17c7ede49af7f429
---

# 500 Errors from Malformed sort Field Payload

The CDA returns intermittent 500 Internal Server Errors for certain endpoints. Investigation shows the errors are consistently triggered at the origin (not the CDN) for a specific set of requests.

**Root Cause**

500 errors at the origin level are triggered by malformed payloads in the sort field parameter. When the sort query parameter contains an invalid value (for example, an unsupported field name, incorrect format, or an unexpected data type), the origin server fails to process the request and returns a 500.

**Resolution**

1.  Review the sort parameter in the failing requests. Valid sort values are field UIDs (for example, created\_at, updated\_at, or a custom field UID).
2.  Test the request without the sort parameter to confirm the 500 disappears, isolating the sort field as the cause.
3.  Correct the sort parameter to use a valid, indexed field UID.

**Note:** the CDA does not support multi-field sorting. Only a single sort parameter is accepted per request.

After correcting the sort parameter, re-run the request and confirm the 500 error no longer occurs.
