---
title: "SDK Session Expiration for Private Stack Access"
description: "SDK Session Expiration for Private Stack Access"
url: /headless-cms/support-troubleshooting/sdk-troubleshooting-guides/02-authentication-regions-networking/05-sdk-session-expiration-for-private-stack-access
doc_type: faq
_cms_section_uid: cs11e3b2dfad59b84e
_cms_faq_uid: cs3700345a8a6652a9
---

# SDK Session Expiration for Private Stack Access

Scripts using the SDK with an **Authtoken** (user session) fail after a few hours, resulting in 401 Unauthorized as the session expires.

**Root Cause**

User-session Authtokens have a limited lifespan and expire, causing long-running background scripts to fail once the initial session token becomes invalid.

**Resolution**

Long-running scripts using user session auth can fail when session tokens expire.

**Do**

1.  Use management\_token for long-running, non-interactive server jobs.
2.  Keep auth mode explicit per workflow (management\_token, authtoken, or OAuth bearer).
3.  Handle 401 with a controlled re-auth/refresh path, then retry only safe/idempotent operations.
4.  Configure retry strategy for 429/5xx separately from authentication renewal.

**Don't**

1.  Don't run long background automation on user authtoken unless you own renewal logic.
2.  Don't assume a generic login() call automatically refreshes tokens in every SDK flow.
3.  Don't mix authorization and authtoken headers in the same request path.
4.  Don't retry 401 indefinitely without rotating or re-establishing credentials.

Long-running job completes without late-stage 401 failures, and any forced token rollover recovers via the defined re-auth path. Escalate with job duration, auth mode (management\_token/authtoken/OAuth), retry settings, and first 401 timestamp/request ID.
