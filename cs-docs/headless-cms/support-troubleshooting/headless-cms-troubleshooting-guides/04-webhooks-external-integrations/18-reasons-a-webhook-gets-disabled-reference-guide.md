---
title: "Reasons a Webhook Gets Disabled - Reference Guide"
description: "Reasons a Webhook Gets Disabled - Reference Guide"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/18-reasons-a-webhook-gets-disabled-reference-guide
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs3751e6a09b5f34c2
---

# Reasons a Webhook Gets Disabled - Reference Guide

Webhooks are getting disabled unexpectedly on a stack. The team needs a clear understanding of all conditions that cause automatic disablement and what to do in each case.

**Root Cause**

Contentstack disables a webhook automatically under the following conditions:

-   Repeated endpoint failures: the endpoint consistently returns 5xx errors or connection timeouts across multiple consecutive delivery attempts.
-   Authentication failures: the endpoint consistently returns 401 or 403 responses, indicating the authentication credentials are invalid or expired (and cannot be refreshed via the OAuth flow).
-   Unhealthy endpoint: the endpoint URL is unreachable or returns unexpected responses that indicate it is no longer healthy.
-   Rate limit exceeded: persistent 429 Too Many Requests responses from the endpoint cause the circuit breaker to trip.

**Resolution**

1.  Check the webhook execution logs in the Contentstack dashboard to identify the specific error code returned by the endpoint before disablement.
2.  Resolve the root cause: fix the endpoint, update credentials, reduce delivery frequency, or correct the configuration.
3.  Re-enable the webhook manually from Settings > Webhooks.
4.  Configure a notification email to receive alerts for future disablement events.
5.  Re-publish any content that was missed during the disablement window if the downstream system requires it.

After resolving the root cause and re-enabling, trigger a test webhook and confirm the endpoint responds with a 200 OK status.
