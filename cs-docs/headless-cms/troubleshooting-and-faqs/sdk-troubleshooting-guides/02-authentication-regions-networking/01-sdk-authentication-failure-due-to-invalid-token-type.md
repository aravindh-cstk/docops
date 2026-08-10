---
title: "SDK Authentication Failure Due to Invalid Token Type"
description: "SDK Authentication Failure Due to Invalid Token Type"
url: /headless-cms/troubleshooting-and-faqs/sdk-troubleshooting-guides/02-authentication-regions-networking/01-sdk-authentication-failure-due-to-invalid-token-type
doc_type: faq
_cms_section_uid: cs11e3b2dfad59b84e
_cms_faq_uid: cs6c90a9c48ff84f05
---

# SDK Authentication Failure Due to Invalid Token Type

SDK requests return 401 Unauthorized when a token type does not match the SDK/API being used (for example, using a CMA token with the Delivery SDK).

**Root Cause**

A mismatch exists between the API being called and the token provided, such as using a Management Token for Delivery API calls or a token from a different stack.

**Resolution**

1.  Use the correct token for the SDK:
    -   Delivery SDK -> Delivery Token
    -   Management SDK -> Management Token / Auth Token
2.  Confirm that the API key and token were generated from the same stack.
3.  For Delivery SDK calls, verify the token has access to the configured environment.

A fetch call returns 200 with a non-empty payload and no 401 response. Escalate if a token is active in UI but still rejected. Share stack UID, SDK package name/version, and request ID if available
