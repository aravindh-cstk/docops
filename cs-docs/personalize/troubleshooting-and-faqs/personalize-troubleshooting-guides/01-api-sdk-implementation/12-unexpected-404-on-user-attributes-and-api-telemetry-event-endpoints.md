---
title: "Unexpected 404 on /user-attributes and /api/telemetry/event Endpoints"
description: "Unexpected 404 on /user-attributes and /api/telemetry/event Endpoints"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/01-api-sdk-implementation/12-unexpected-404-on-user-attributes-and-api-telemetry-event-endpoints
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: cs146b3a1023493450
---

# Unexpected 404 on /user-attributes and /api/telemetry/event Endpoints

A 404 error appears on the Personalize Edge /user-attributes endpoint on page load, even though the application is not making explicit GET or PATCH calls to that endpoint. A separate 404 on POST /api/telemetry/event may also be observed in the same environment.

**Root Cause**

The /user-attributes call is triggered automatically by certain Contentstack packages — in particular, the Live Preview Utils package (@contentstack/live-preview-utils) and Lytics jstag integration — rather than by explicit developer code. If the Personalize project UID is not correctly configured in the jstag settings within Lytics, the outbound PATCH /user-attributes request will fail with a 400 or 404 because the platform cannot route the request to the correct project. The /api/telemetry/event 404 is typically a separate, non-critical call made by SDK packages for internal diagnostics and does not affect personalization delivery.

**Resolution**

1.  Open browser developer tools, navigate to the Network tab, and filter for requests to the personalize-edge.contentstack.com domain. Identify which package or script is initiating the /user-attributes call.
2.  If Lytics is installed on the site, navigate to the Lytics dashboard and verify that the Contentstack Personalize project UID is correctly entered in the jstag configuration settings. A missing or incorrect project UID is the most common cause of this 404.
3.  If Lytics is not in use, check whether the @contentstack/live-preview-utils package is initialised with the correct project UID and environment settings.
4.  For the /api/telemetry/event 404: confirm whether this endpoint is required by your implementation. If the 404 has no visible effect on personalization behaviour, it can be treated as a non-critical SDK diagnostic call. If it is blocking a workflow, open a support case and share a HAR file capturing the full request/response.
5.  After correcting the project UID configuration, reload the page and confirm that /user-attributes returns a 200 response and that personalization behaves as expected.

If the 404 persists after verifying the project UID and package configuration, open a support case with your Project UID, the full request URL, response headers, and a HAR file if available. Do not share HAR files containing authentication tokens without redacting sensitive values first.
