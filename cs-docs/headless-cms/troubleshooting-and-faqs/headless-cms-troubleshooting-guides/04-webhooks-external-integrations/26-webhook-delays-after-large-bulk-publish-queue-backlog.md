---
title: "Webhook Delays After Large Bulk Publish - Queue Backlog"
description: "Webhook Delays After Large Bulk Publish - Queue Backlog"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/26-webhook-delays-after-large-bulk-publish-queue-backlog
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs86ede1ed42efce05
---

# Webhook Delays After Large Bulk Publish - Queue Backlog

Webhooks stop triggering or are significantly delayed after a large bulk publish operation. Waiting a long time eventually restores normal webhook delivery.

**Root Cause**

Contentstack’s webhook system processes events with a concurrency limit. A large bulk publish generates a high volume of webhook events simultaneously. When the number of queued events exceeds the concurrency limit, the queue builds up and subsequent webhooks are delayed until earlier events are processed. The publish itself completes correctly - only the webhook delivery is delayed.

**Resolution**

1.  If delivery is critically delayed and events are piling up, temporarily disable the affected webhook to allow the existing queue to drain.
2.  Re-enable the webhook after the queue has cleared.
3.  For ongoing workloads, avoid triggering large bulk publishes (thousands of entries simultaneously) during peak hours. Stagger bulk operations to reduce webhook queue pressure.
4.  If webhook delivery delays recur consistently with large bulk publishes, contact Contentstack Support to investigate queue scaling for your organization.

After the queue drains and the webhook is re-enabled, confirm that new publish events trigger webhook delivery within the expected time window.
