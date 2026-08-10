---
title: "Securing Firewall-Protected Endpoints That Receive Webhook Traffic"
description: "Securing Firewall-Protected Endpoints That Receive Webhook Traffic"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/10-securing-firewall-protected-endpoints-that-receive-webhook-traffic
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cse8415f33ea9c692c
---

# Securing Firewall-Protected Endpoints That Receive Webhook Traffic

A webhook endpoint is behind a strict firewall (for example, triggering an Azure Function) that requires static IP ranges or trusted header-based filtering before allowing inbound traffic. The customer needs to know how to secure webhook delivery without blocking legitimate requests.

**Root Cause**

Firewall-restricted webhook endpoints require either IP-based or header-based verification to accept webhook traffic. Contentstack provides both mechanisms to support these scenarios.

**Resolution**

Contentstack supports the following mechanisms for securing webhook delivery to firewall-protected endpoints:

1.  IP whitelisting: whitelist the static outbound IP addresses for your region (see Issue 1 above) in the firewall or network access control list.
2.  Request signature header: every webhook request includes the X-Contentstack-Request-Signature header, which contains an RSASSA-PSS signature. The receiving endpoint can verify this header against the Contentstack public key to confirm authenticity.
3.  Custom headers: configure custom request headers in the webhook settings to include a shared secret or token that the receiving endpoint can validate.
4.  Authentication methods: configure Basic Auth, Bearer Token, or OAuth 2.0 Client Credentials in the webhook settings to authenticate requests at the application layer.

Use a combination of IP whitelisting (for network-level trust) and request signature verification or authentication headers (for application-level trust) for defense-in-depth webhook security.
