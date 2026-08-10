---
title: "Webhook Delay of 20–30 Minutes After Bulk Publish - Queue Pressure"
description: "Webhook Delay of 20–30 Minutes After Bulk Publish - Queue Pressure"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/50-webhook-delay-of-20-30-minutes-after-bulk-publish-queue-pressure
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csa6fc961eaef91bc4
---

# Webhook Delay of 20–30 Minutes After Bulk Publish - Queue Pressure

Webhook events for a bulk publish job (for example, 10 entries published simultaneously) arrive at the receiving endpoint 20–30 minutes after the publish action completed. The delay impacts downstream systems that depend on real-time event processing.

**Root Cause**

Contentstack’s webhook system processes events with a concurrency limit. When a bulk publish generates a high volume of webhook events across multiple organizations simultaneously (shared infrastructure), the webhook processing queue builds up. Events are delivered in order, but slower if the queue is under pressure. For the specific bulk publish case, concurrent webhook queue load from other organizations in the region was identified as the primary cause of the 20–30 minute delay.

**Resolution**

1.  For time-sensitive downstream systems: implement retry logic and a timeout-based fallback in the receiving system that can detect missed or delayed events and poll the Contentstack CDA or CMA for the latest content state if an expected event hasn’t arrived within a tolerance window.
2.  For large bulk publishes: consider splitting the bulk operation into smaller sequential batches (for example, 5–10 entries at a time with a brief pause between batches) to reduce the spike in webhook events generated at a single point in time.
3.  If sustained webhook delays are impacting production operations, contact Contentstack Support and provide the time window, bulk job details, and the delay observed. Engineering can investigate queue health for the specific region.
4.  Monitor webhook delivery times via the execution logs in the Contentstack dashboard to establish a baseline and detect anomalies proactively.

After implementing the fallback polling strategy for time-sensitive systems, confirm that downstream processes continue correctly even when webhook delivery is delayed.
