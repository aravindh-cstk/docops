---
title: "Webhook Delivery Fails Due to IP Whitelisting or Network Restrictions"
description: "Webhook Delivery Fails Due to IP Whitelisting or Network Restrictions"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/02-webhook-delivery-fails-due-to-ip-whitelisting-or-network-restrictions
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs10f4d43e1bdb0c6b
---

# Webhook Delivery Fails Due to IP Whitelisting or Network Restrictions

Webhook endpoints do not receive requests after an event is triggered.

**Root Cause**

Firewall, IP allowlists, or network restrictions block incoming requests from Contentstack webhook IP addresses.

**Resolution**

-   Allowlist the official Contentstack webhook IP addresses. Refer to the documentation.
-   Verify firewall and security group rules. Ensure inbound HTTPS (port 443) traffic from Contentstack IP ranges is permitted.
-   **Confirm endpoint response behavior:** Ensure the webhook endpoint returns a 2xx HTTP status code for successful requests.
-   Review server logs:
    -   Check application/server logs for rejected or blocked IP addresses.
    -   Look for 403, 401, or connection timeout entries.

Trigger a test webhook event.

**Confirm:**

-   The endpoint receives the request.
-   The endpoint returns a 2xx response.
-   No IP-based rejection appears in server logs.
-   The webhook remains in an active state in the CMS.
