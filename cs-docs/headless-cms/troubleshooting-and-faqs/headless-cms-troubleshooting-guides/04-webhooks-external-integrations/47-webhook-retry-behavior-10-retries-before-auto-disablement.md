---
title: "Webhook Retry Behavior - 10 Retries Before Auto-Disablement"
description: "Webhook Retry Behavior - 10 Retries Before Auto-Disablement"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/47-webhook-retry-behavior-10-retries-before-auto-disablement
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csd06ae05971307bb6
---

# Webhook Retry Behavior - 10 Retries Before Auto-Disablement

A customer wants to understand how many times Contentstack retries a failed webhook before disabling it, and whether the retry interval can be configured.

**Root Cause**

Contentstack implements a circuit breaker pattern for webhook reliability. When a webhook endpoint returns failure responses (5xx errors, 401 Unauthorized, or connection timeouts), Contentstack retries the delivery up to 10 times before automatically disabling the webhook as a safeguard. The retry interval uses an exponential backoff pattern.

**Resolution**

-   Retry count: up to 10 retry attempts before the webhook is automatically disabled.
-   Retry triggers: 5xx server errors, 401 Unauthorized responses, and connection timeouts.
-   Retry interval: exponential backoff - the interval between retries increases with each attempt.
-   Configurable: the retry count and interval are not configurable. They are platform-enforced defaults.
-   After 10 failures: the webhook is automatically disabled and must be manually re-enabled from Settings > Webhooks after the endpoint issue is resolved.

To receive proactive notification when a webhook is disabled after retry exhaustion, configure the ‘Email Addresses to Notify’ field in the webhook settings.
