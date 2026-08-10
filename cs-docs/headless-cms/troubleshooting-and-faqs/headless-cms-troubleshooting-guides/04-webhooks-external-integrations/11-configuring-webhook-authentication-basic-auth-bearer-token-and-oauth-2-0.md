---
title: "Configuring Webhook Authentication - Basic Auth, Bearer Token, and OAuth 2.0"
description: "Configuring Webhook Authentication - Basic Auth, Bearer Token, and OAuth 2.0"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/11-configuring-webhook-authentication-basic-auth-bearer-token-and-oauth-2-0
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs64cf00897f7f19e2
---

# Configuring Webhook Authentication - Basic Auth, Bearer Token, and OAuth 2.0

Guidance is needed on the available webhook authentication methods in Contentstack, how to configure each, and when to use each option.

**Root Cause**

Contentstack supports three authentication methods for webhook requests in addition to unauthenticated (None) delivery. Each method serves different security and integration requirements.

**Resolution**

**Basic Auth:**

Attach a username and password to every webhook request. Configure in the webhook settings by selecting Basic Auth and entering credentials. The receiving endpoint validates the credentials on each request.

**Bearer Token:**

Attach a static bearer token in the Authorization header of each webhook request. Configure in the webhook settings by selecting Bearer Token and entering the token value. Suitable for endpoints that accept static API keys.

**OAuth 2.0 Client Credentials:**

Contentstack fetches an access token from a configured token endpoint and includes it in webhook requests. When the token expires and the endpoint returns a 401 with the correct WWW-Authenticate header, Contentstack automatically refreshes the token. OAuth 2.0 must be enabled for the organization - contact Contentstack Support to request enablement. Commercial details must be confirmed with your Customer Success Manager.

**None:**

No authentication header is included. Use this when the endpoint handles security through IP whitelisting or request signature verification instead.

After configuring the chosen authentication method, trigger a test webhook and verify the endpoint receives the request with the correct authorization credentials.
