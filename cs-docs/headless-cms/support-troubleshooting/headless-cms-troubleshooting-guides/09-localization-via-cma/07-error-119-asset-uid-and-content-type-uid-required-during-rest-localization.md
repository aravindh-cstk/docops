---
title: "Error 119 - Asset UID and Content Type UID Required During REST Localization"
description: "Error 119 - Asset UID and Content Type UID Required During REST Localization"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/09-localization-via-cma/07-error-119-asset-uid-and-content-type-uid-required-during-rest-localization
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs21105c48fda5c2f6
---

# Error 119 - Asset UID and Content Type UID Required During REST Localization

A REST API integration for localizing entries returns Error 119: ‘Asset UID and Content Type UID are required properties’ across multiple nested fields when sending translated content back to Contentstack. A secondary error - ‘that\[typeValidator\] is not a function’ - also appears. The errors occur only for certain entries involving complex nested fields.

**Root Cause**

The integration is sending the read (response) JSON structure back to the API instead of the required write format. Two specific causes:

-   Root Cause 1: Asset reference fields in custom extension-backed fields (such as Image Preset Builder) require a specific write format. The connector sends the full read response object (including URLs, dimensions, etc.) rather than just the required uid and \_content\_type\_uid fields.
-   Root Cause 2: Some field values are being sent as stringified JSON instead of parsed JSON objects, causing type validation failures.

**Resolution**

1.  Always send data in the documented write format, not the read/response format. For asset reference fields, the write format is: { “uid”: “<asset\_uid>”, “\_content\_type\_uid”: “sys\_assets” }
2.  Ensure all custom field values are passed as parsed JSON objects, not as strings. Validate the payload before sending.
3.  For fields backed by Marketplace apps (such as Image Preset Builder), only translate permitted fields (such as asset title or description) and preserve all structural metadata unchanged.
4.  For unknown or extension-backed fields whose schema is unclear, treat them as non-translatable and pass the original value through unchanged to avoid validation failures.

After updating the integration to send write-format payloads with correctly typed values, re-run the localization workflow on a test entry and confirm Error 119 and the typeValidator error no longer appear.
