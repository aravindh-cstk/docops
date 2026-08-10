---
title: "Contentstack Webhook IP Addresses by Region"
description: "Contentstack Webhook IP Addresses by Region"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/07-contentstack-webhook-ip-addresses-by-region
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs86a70bf3145d173d
---

# Contentstack Webhook IP Addresses by Region

Webhook requests sent from Contentstack are rejected or blocked by the receiving server’s firewall. The server administrator needs to know which IP addresses to whitelist to allow inbound webhook traffic.

**Root Cause**

Contentstack sends all webhook requests from a fixed set of outbound IP addresses per cloud region. When a receiving server has a firewall or network access control list, these IPs must be explicitly allowed. If the IPs are not whitelisted, webhook requests will be refused at the network level.

**Resolution**

Whitelist the appropriate IPs for your stack’s cloud region. Contact Contentstack Support to obtain the current IP list for your specific region, as IP ranges are subject to change. The currently documented IPs by region are:

-   AWS NA: 52.35.1.58, 52.35.48.83, 52.27.91.224
-   AWS EU: Obtain from Contentstack Support - ASN details are not shared but full IP ranges are available on request
-   Azure NA: 20.98.104.159, 20.115.208.50 (note: 20.3.15.152 is no longer active and should be removed)
-   Azure EU: Obtain from Contentstack Support

Note: Contentstack does not publish ASN details. Whitelist by specific IP address, not by ASN.

1.  Add the applicable IP addresses to the inbound allow list in your firewall or network access control configuration.
2.  After updating the firewall, trigger a test webhook event and confirm the request is received by the endpoint.
3.  If new IPs are issued in future, contact Contentstack Support to obtain the updated list.

After updating the whitelist, trigger a test publish event and verify the webhook payload is received at the endpoint without a connection refused or blocked response.
