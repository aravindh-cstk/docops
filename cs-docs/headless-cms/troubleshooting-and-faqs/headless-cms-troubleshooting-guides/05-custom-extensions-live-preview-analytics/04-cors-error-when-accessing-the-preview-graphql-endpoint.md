---
title: "CORS Error When Accessing the Preview GraphQL Endpoint"
description: "CORS Error When Accessing the Preview GraphQL Endpoint"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/04-cors-error-when-accessing-the-preview-graphql-endpoint
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs1762878bf630e382
---

# CORS Error When Accessing the Preview GraphQL Endpoint

A CORS (Cross-Origin Resource Sharing) error occurs when attempting to access the Preview GraphQL endpoint from a browser-based application. The request is blocked due to a missing or incorrect CORS header in the response.

**Root Cause**

CORS errors on the Preview GraphQL endpoint typically occur when the request origin is not included in the allowed origins configured for the stack or when environment-specific configuration details are missing from the request. The Preview endpoint may have additional requirements compared to the standard Delivery endpoint.

**Resolution**

1.  Confirm the request origin (the domain making the browser-side request) matches what is configured in the Contentstack stack settings.
2.  Verify the environment specified in the request corresponds to a valid, active environment in the stack.
3.  Ensure the correct Preview API token is being used and that it has access to the target environment.
4.  If the CORS issue persists after verifying configuration, contact Contentstack Support with the request origin, environment details, and a sample request for further investigation.

After verifying and correcting the origin and environment configuration, retry the browser-based request to the Preview GraphQL endpoint. If the CORS error no longer appears, the origin is now permitted.
