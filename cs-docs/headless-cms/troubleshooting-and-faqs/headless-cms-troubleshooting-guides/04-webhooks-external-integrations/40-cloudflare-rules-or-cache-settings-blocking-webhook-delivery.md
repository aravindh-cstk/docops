---
title: "Cloudflare Rules or Cache Settings Blocking Webhook Delivery"
description: "Cloudflare Rules or Cache Settings Blocking Webhook Delivery"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/40-cloudflare-rules-or-cache-settings-blocking-webhook-delivery
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs77124db0531f878f
---

# Cloudflare Rules or Cache Settings Blocking Webhook Delivery

A webhook that was previously working stops delivering events. Investigation reveals the endpoint is reachable but Contentstack requests are being blocked. The issue is resolved after making changes to Cloudflare settings.

**Root Cause**

Cloudflare’s Web Application Firewall (WAF) rules, cache policies, or IP reputation filters can block inbound webhook requests from Contentstack. This can occur after a Cloudflare configuration change, a Cloudflare WAF rule update, or when Contentstack’s outbound IP addresses are treated as suspicious by a Cloudflare security rule.

**Resolution**

1.  Log in to the Cloudflare dashboard and review the firewall events log for blocked requests originating from Contentstack’s IP addresses.
2.  Create a Cloudflare WAF allow rule for Contentstack’s outbound IP addresses to exempt webhook traffic from WAF blocking.
3.  If caching is applied to the webhook endpoint URL, add a Cache Rule to bypass caching for the webhook endpoint path.
4.  Ensure the webhook endpoint path is not subject to Cloudflare’s DDoS protection rules that may throttle POST requests.

After updating the Cloudflare rules to allow Contentstack’s IPs and bypass caching on the webhook endpoint, trigger a test webhook and confirm delivery succeeds.
