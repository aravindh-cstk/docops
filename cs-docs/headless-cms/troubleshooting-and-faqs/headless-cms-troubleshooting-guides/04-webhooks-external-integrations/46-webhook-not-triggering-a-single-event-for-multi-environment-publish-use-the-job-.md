---
title: "Webhook Not Triggering a Single Event for Multi-Environment Publish - Use the Job Channel"
description: "Webhook Not Triggering a Single Event for Multi-Environment Publish - Use the Job Channel"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/46-webhook-not-triggering-a-single-event-for-multi-environment-publish-use-the-job-
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs0c4f99800178c3b2
---

# Webhook Not Triggering a Single Event for Multi-Environment Publish - Use the Job Channel

A customer configures a webhook for entry publish events but does not receive a single unified notification when an entry is published to multiple environments simultaneously. Instead, they either receive multiple events (one per environment) or no events at all.

**Root Cause**

Contentstack does not send a single combined webhook event for a publish action that targets multiple environments simultaneously. Each environment publish generates its own individual event, and the webhook fires per environment. If a single summary notification is needed for a multi-environment publish operation, the Channels filter on the webhook must be configured appropriately, or the job channel must be used.

**Resolution**

1.  To receive a single summary notification for a bulk or multi-environment publish operation, configure the webhook to subscribe to the Job channel. The job channel delivers a summary notification for the overall publish operation after it completes, rather than one event per environment.
2.  From the job summary payload, make a follow-up API call to fetch the detailed information for the specific entries and environments that were published.
3.  If per-environment granularity is needed (rather than a summary), configure separate webhooks scoped to each environment using the Channels condition in the webhook settings.

After subscribing to the job channel, trigger a multi-environment publish and confirm a single summary notification is received rather than multiple per-environment events.
