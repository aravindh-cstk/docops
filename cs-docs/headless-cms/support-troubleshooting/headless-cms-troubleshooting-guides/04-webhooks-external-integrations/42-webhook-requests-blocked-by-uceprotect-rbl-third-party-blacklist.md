---
title: "Webhook Requests Blocked by UCEPROTECT RBL - Third-Party Blacklist"
description: "Webhook Requests Blocked by UCEPROTECT RBL - Third-Party Blacklist"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/42-webhook-requests-blocked-by-uceprotect-rbl-third-party-blacklist
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs02f3a0d4b673d23f
---

# Webhook Requests Blocked by UCEPROTECT RBL - Third-Party Blacklist

Webhook requests from Contentstack are being blocked at the receiving server’s network layer. Investigation reveals the Contentstack IP addresses are listed on the UCEPROTECT Real-time Blackhole List (RBL) used by the network or mail gateway.

**Root Cause**

UCEPROTECT operates as a commercial pay-to-delist service. IP address blocks are based on automated detection criteria that can include shared infrastructure neighbors - meaning legitimate IP addresses on shared subnets can be listed without any abuse originating from those IPs. Cloudflare and other CDN/network providers have flagged UCEPROTECT as an unreliable blocklist due to this model.

**Resolution**

1.  Advise the network or security team to review whether UCEPROTECT is an appropriate RBL for their use case. Cloudflare explicitly recommends that organizations consider alternative providers for blacklist validation due to UCEPROTECT’s pay-to-delist model.
2.  As an immediate workaround: add the specific Contentstack webhook IP addresses to an explicit allowlist at the application or firewall level, which overrides the RBL block for those known-good IPs.
3.  If using Cloudflare WAF, create a WAF exception or allowlist rule for the Contentstack IP addresses to bypass the RBL check.
4.  If the business is unable to change the RBL configuration, contact Contentstack Support for alternative outbound routing options.

After adding Contentstack IPs to the explicit allowlist, trigger a test webhook and confirm the request bypasses the RBL block and reaches the endpoint.
