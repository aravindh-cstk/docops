---
title: "Webhook Publish Event Looping"
description: "Webhook Publish Event Looping"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/39-webhook-publish-event-looping
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cs2395bd8f1e92d1b6
---

# Webhook Publish Event Looping

A webhook configured to fire on entry publish is causing entries to be published in a continuous loop. Each webhook-triggered action causes another publish event, which re-triggers the webhook.

**Root Cause**

A publish event webhook that triggers a CMA update or publish operation on the same entry creates a recursive cycle: publish → webhook → CMA update → publish → webhook. This pattern is especially common when a webhook is used to set or update a field value after publish (for example, setting a campaign ID or last-modified timestamp).

**Resolution**

1.  Implement a loop-prevention check in the webhook receiver: compare the field value being set against the current value. If they are equal, skip the CMA update to avoid re-triggering the publish.
2.  Make the field being updated by the webhook non-localizable, which ensures it is set globally in a single operation rather than per-locale, reducing the number of webhook triggers.
3.  Add a custom header to webhook-triggered CMA requests. In the webhook receiver, check for this header - if the request was triggered by a webhook, skip the re-publish.
4.  Consider using the Automate Hub instead of a direct CMA call, as Automate has built-in idempotency and loop-detection mechanisms.

After implementing loop-prevention logic, trigger a single publish and confirm the webhook fires once and does not cause additional publish events.
