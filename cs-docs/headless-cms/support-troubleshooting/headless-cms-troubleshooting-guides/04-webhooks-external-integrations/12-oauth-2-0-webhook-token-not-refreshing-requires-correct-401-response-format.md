---
title: "OAuth 2.0 Webhook Token Not Refreshing - Requires Correct 401 Response Format"
description: "OAuth 2.0 Webhook Token Not Refreshing - Requires Correct 401 Response Format"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/12-oauth-2-0-webhook-token-not-refreshing-requires-correct-401-response-format
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs944907e90bdbbfc8
---

# OAuth 2.0 Webhook Token Not Refreshing - Requires Correct 401 Response Format

A webhook configured with OAuth 2.0 initially works correctly but later becomes disabled. Investigation reveals that Contentstack is continuing to use an expired access token rather than fetching a new one, causing all subsequent webhook deliveries to fail.

**Root Cause**

Contentstack follows the OAuth 2.0 standard for token refresh triggering. To signal that an access token has expired and a new one should be requested, the endpoint must return a 401 Unauthorized response that includes a WWW-Authenticate header with the value error=“invalid\_token”. If this header is absent from the 401 response, Contentstack does not recognize the 401 as a token expiry signal and does not trigger a refresh. The webhook continues to fail with the expired token until it is disabled by the circuit breaker.

**Resolution**

1.  Update the webhook-receiving endpoint or its authentication middleware to return the following header alongside a 401 response when the token is expired:
2.  WWW-Authenticate: Bearer realm=“example”, error=“invalid\_token”, error\_description=“The access token expired”
3.  Ensure the error=“invalid\_token” value is present - this is the specific signal Contentstack uses to trigger a token refresh.
4.  After updating the endpoint, re-enable the disabled webhook and trigger a test event. Verify the token refresh occurs correctly when the token expires.

After the endpoint is updated to return the correct WWW-Authenticate header on 401 responses, trigger a webhook call with an expired token. If Contentstack successfully refreshes the token and the webhook delivers correctly, the refresh flow is working.
