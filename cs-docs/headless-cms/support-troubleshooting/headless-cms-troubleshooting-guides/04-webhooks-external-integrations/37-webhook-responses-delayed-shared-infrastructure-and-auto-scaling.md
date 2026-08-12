---
title: "Webhook Responses Delayed - Shared Infrastructure and Auto-Scaling"
description: "Webhook Responses Delayed - Shared Infrastructure and Auto-Scaling"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/37-webhook-responses-delayed-shared-infrastructure-and-auto-scaling
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs231dee76ed03c6af
---

# Webhook Responses Delayed - Shared Infrastructure and Auto-Scaling

Webhooks are taking significantly longer than usual to deliver - delays of several minutes instead of seconds. The issue is intermittent and appears to resolve over time without any configuration change.

**Root Cause**

Contentstack’s webhook infrastructure is a shared system across all organizations. During periods of unusually high platform load (for example, widespread bulk publishes or infrastructure events), webhook processing may be temporarily throttled while auto-scaling provisions additional capacity. The delay is not caused by the customer’s webhook configuration and requires no action on their side.

**Resolution**

1.  Monitor the webhook execution logs in the dashboard to confirm events are queued and not failing.
2.  If the delay is consistent and exceeds 10–15 minutes, contact Contentstack Support with the approximate start time and affected stack and region details.
3.  Do not disable and re-enable the webhook during a temporary delay - this can cause events to be dropped from the queue.
4.  For time-sensitive delivery requirements, implement a retry mechanism in the receiving endpoint that can handle delayed delivery gracefully.

After the auto-scaling resolves, confirm that new webhook events are delivered within the normal expected window.
