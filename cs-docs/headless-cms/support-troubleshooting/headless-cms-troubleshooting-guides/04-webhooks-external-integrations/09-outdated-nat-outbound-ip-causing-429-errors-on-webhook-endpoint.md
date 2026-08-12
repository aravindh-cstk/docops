---
title: "Outdated NAT Outbound IP Causing 429 Errors on Webhook Endpoint"
description: "Outdated NAT Outbound IP Causing 429 Errors on Webhook Endpoint"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/09-outdated-nat-outbound-ip-causing-429-errors-on-webhook-endpoint
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs3d72e9d7a478a841
---

# Outdated NAT Outbound IP Causing 429 Errors on Webhook Endpoint

A high volume of 429 Too Many Requests errors appears on the webhook endpoint. Webhook delivery is failing at scale and the receiving server is rate-limiting the requests.

**Root Cause**

The customer’s webhook receiving system was rate-limiting requests originating from an outdated NAT outbound IP. Because the outdated IP was not in the customer’s allowed list, the server treated these requests as unauthorized traffic and applied aggressive rate limiting. The outbound IP Contentstack was using had changed and the webhook configuration on the customer’s side had not been updated to reflect this.

**Resolution**

1.  Contact Contentstack Support and request the current active outbound IP addresses for your region.
2.  Remove any outdated IPs from your firewall allowlist and add the current ones.
3.  Verify that no additional rate-limiting rules are targeting the Contentstack IP range beyond standard firewall allow/deny rules.
4.  After updating, monitor the webhook logs for 429 errors and confirm they cease.

After updating the allowlist with the current IPs, trigger a series of webhook events and confirm requests are received without 429 responses.
