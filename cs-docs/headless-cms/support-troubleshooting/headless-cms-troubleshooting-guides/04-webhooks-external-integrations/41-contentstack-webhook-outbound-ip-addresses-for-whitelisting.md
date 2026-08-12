---
title: "Contentstack Webhook Outbound IP Addresses for Whitelisting"
description: "Contentstack Webhook Outbound IP Addresses for Whitelisting"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/41-contentstack-webhook-outbound-ip-addresses-for-whitelisting
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs70afa6b51be4c284
---

# Contentstack Webhook Outbound IP Addresses for Whitelisting

A receiving server’s firewall or network access control is blocking inbound webhook requests from Contentstack. The server administrator needs the current outbound IP addresses to add to the allowlist.

**Root Cause**

Contentstack sends all webhook requests from a fixed set of outbound IP addresses per cloud region. Firewall rules must explicitly permit these IPs before webhook traffic can reach the endpoint.

**Resolution**

The current confirmed outbound IP addresses for the AWS North America region are:

-   52.35.1.58
-   52.35.48.83
-   52.27.91.224

IMPORTANT - Verify before publishing: the IP addresses above are sourced from support case data and may not reflect the current active set. Before publishing this article, confirm the current IP list with Contentstack Support or from the official Contentstack webhook documentation. IP ranges can change, and publishing outdated IPs will cause customers to misconfigure their firewalls.

For other regions (AWS EU, Azure NA, Azure EU), contact Contentstack Support and specify the cloud provider and region for the stack. IP addresses are confirmed to be stable - if the IPs above are not returning traffic, verify the correct regional endpoint is being used rather than assuming the IPs have changed.

1.  Add the applicable IP addresses to the inbound allow list in the firewall or network ACL.
2.  After updating the firewall, trigger a test webhook event and confirm the request is received at the endpoint.
3.  If IPs change in future (Contentstack will communicate this), update the allowlist accordingly. Contact Contentstack Support to confirm the current list before making any changes.

After updating the allowlist, trigger a test publish event and verify the webhook payload is received without a connection refused or blocked response.
