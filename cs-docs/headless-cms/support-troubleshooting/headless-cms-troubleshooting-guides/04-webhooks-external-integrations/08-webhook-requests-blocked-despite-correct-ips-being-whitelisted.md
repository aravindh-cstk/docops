---
title: "Webhook Requests Blocked Despite Correct IPs Being Whitelisted"
description: "Webhook Requests Blocked Despite Correct IPs Being Whitelisted"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/08-webhook-requests-blocked-despite-correct-ips-being-whitelisted
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs3c3a03ac0cb53c9f
---

# Webhook Requests Blocked Despite Correct IPs Being Whitelisted

Webhook requests continue to be refused even after the IP addresses provided by Contentstack Support have been added to the firewall. The customer has confirmed the IPs are whitelisted.

**Root Cause**

The most common cause is a mismatch between the whitelisted IPs and the actual outbound IPs Contentstack is currently using. If the stack was provisioned on a different cloud provider or region than assumed, the wrong regional IP set may have been whitelisted. Additionally, an outdated NAT outbound IP (for example, the now-inactive Azure NA IP 20.3.15.152) may still be configured.

**Resolution**

1.  Confirm the cloud region for your stack from the Contentstack dashboard URL or stack settings.
2.  Re-request the IP list from Contentstack Support, specifying the stack’s exact cloud provider and region, to ensure you have the current active IPs.
3.  Remove any deprecated IPs from the whitelist (for example, 20.3.15.152 for Azure NA).
4.  Add the newly confirmed IPs and retest the webhook.
5.  Inspect server-side firewall logs to confirm whether the rejected requests are originating from the whitelisted IPs or from a different address.

After updating to the correct and current IP set, trigger a test webhook and confirm the request passes through the firewall without rejection.
