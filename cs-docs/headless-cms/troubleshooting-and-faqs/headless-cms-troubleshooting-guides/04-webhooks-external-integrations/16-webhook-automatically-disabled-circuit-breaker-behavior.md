---
title: "Webhook Automatically Disabled - Circuit Breaker Behavior"
description: "Webhook Automatically Disabled - Circuit Breaker Behavior"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/16-webhook-automatically-disabled-circuit-breaker-behavior
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs3b689991e8aeffa9
---

# Webhook Automatically Disabled - Circuit Breaker Behavior

A webhook is automatically disabled without warning. The notification endpoint was temporarily unreachable, but the webhook remains disabled even after the endpoint comes back online. This causes cache inconsistencies or missed content events.

**Root Cause**

Contentstack implements a circuit breaker pattern for webhook reliability. When a webhook endpoint repeatedly fails to respond (for example, with 5xx errors or timeouts), Contentstack automatically disables the webhook to prevent further failed delivery attempts and to protect the platform from sustained load against an unavailable endpoint. Once disabled, the webhook does not automatically re-enable when the endpoint recovers - it requires manual re-activation.

**Resolution**

1.  Resolve the underlying issue causing the endpoint to fail (for example, fix the endpoint timeout, restore service availability, or correct authentication configuration).
2.  Navigate to Settings > Webhooks in the Contentstack dashboard.
3.  Locate the disabled webhook (shown with a disabled status indicator).
4.  Re-enable the webhook by toggling it back to active.
5.  Trigger a test webhook delivery to confirm the endpoint is now responding correctly.

Note: Content published while the webhook was disabled will not automatically trigger a retry. If the downstream system needs to process missed events, re-publish the affected entries after re-enabling the webhook.

Note: Webhook execution logs in the Contentstack dashboard can lag behind actual delivery. If the endpoint is confirming receipt of requests but the Logs section shows no new executions, the webhook may be in a disabled state or the log display has not yet refreshed. Confirm the webhook’s active/disabled status before concluding that delivery has failed.
