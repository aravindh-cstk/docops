---
title: "Fixing 403 FORBIDDEN_RESOURCE Errors Caused by an Incorrect Organization ID Parameter"
description: "Fixing 403 FORBIDDEN_RESOURCE Errors Caused by an Incorrect Organization ID Parameter"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/14-api-platform-behavior/02-fixing-403-forbidden-resource-errors-caused-by-an-incorrect-organization-id-parameter
doc_type: faq
_cms_section_uid: cs31ce385b0eaf3343
_cms_faq_uid: csf166e54807efd210
---

# Fixing 403 FORBIDDEN_RESOURCE Errors Caused by an Incorrect Organization ID Parameter

Calls to the Launch API using a valid Authtoken consistently fail with a 403 Forbidden error tagged launch.FORBIDDEN\_RESOURCE, even though the authentication headers and Authtoken appear correct.

**Root Cause**

The request was passing an incorrect parameter name for the organization identifier. The Launch API requires the header to be named organization\_uid; using a different or malformed parameter name causes the platform to reject the request as unauthorized for the requested resource, even when the Authtoken itself is valid.

**Resolution**

1.  Review the headers being sent with the Launch API request and confirm the organization identifier is passed using the exact header name organization\_uid.
2.  Ensure the Authtoken header is also included and correctly formatted alongside the organization\_uid header.
3.  Update the API client or script to use the corrected header name and re-send the request.
4.  Confirm that the 403 FORBIDDEN\_RESOURCE error no longer appears and that the API returns the expected resource data.

The issue is resolved when Launch API calls authenticate successfully using the Authtoken and the correctly named organization\_uid header, with no further 403 errors.
