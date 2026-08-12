---
title: "Empty JSON Response Bodies When statusCode Is Present in Small Payloads (Resolved Platform Issue)"
description: "Empty JSON Response Bodies When statusCode Is Present in Small Payloads (Resolved Platform Issue)"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/14-api-platform-behavior/01-empty-json-response-bodies-when-statuscode-is-present-in-small-payloads-resolved-platform-issue
doc_type: faq
_cms_section_uid: cs31ce385b0eaf3343
_cms_faq_uid: cs39cd0e404989c432
---

# Empty JSON Response Bodies When statusCode Is Present in Small Payloads (Resolved Platform Issue)

API responses from Launch-hosted endpoints returned the correct HTTP status code, but the response body was empty whenever the payload included a “statusCode” field and contained fewer than approximately seven properties. This behavior was consistent across multiple endpoints and was identified as a recent regression.

**Root Cause**

This was a platform-level regression in how Launch serialized small JSON payloads that included a field named “statusCode.” The presence of this field combined with a low property count caused the response body to be dropped while the correct HTTP status code was still returned.

**Resolution**

1.  If you observe a request returning a correct HTTP status code (e.g., 200, 422) but an empty response body, check whether the payload includes a “statusCode” property and has fewer than approximately seven total properties, this combination matches the known regression pattern.
2.  Report the issue to Contentstack Support with sample request/response pairs and the affected endpoint so it can be confirmed against the known issue.
3.  This specific regression has already been fixed by the Launch engineering team and confirmed resolved by the reporting customer. No application-side workaround is required once your environment reflects the platform fix.
4.  If empty response bodies persist after the platform fix, treat it as a new issue rather than a recurrence of this one, and report it separately with full request/response details.

The issue is resolved on the platform side. Confirm your environment reflects the fix by sending a small payload containing a “statusCode” property and verifying the full JSON response body is returned.
