---
title: "Excessive Webhook Traffic Causing 429 Rate Limit Errors"
description: "Excessive Webhook Traffic Causing 429 Rate Limit Errors"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/38-excessive-webhook-traffic-causing-429-rate-limit-errors
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: cse565717a8b1ee291
---

# Excessive Webhook Traffic Causing 429 Rate Limit Errors

A large number of HTTP 429 Too Many Requests errors appear in the webhook logs. The volume of webhook events being generated far exceeds what is expected from normal content publishing activity.

**Root Cause**

429 errors on the webhook system indicate that either: (a) the receiving endpoint is rate-limiting inbound requests from Contentstack, or (b) a misconfigured webhook, automated script, or integration is generating an unexpectedly high volume of webhook events (for example, a recursive loop, an unthrottled bulk operation, or a broken automation repeatedly re-triggering events).

**Resolution**

1.  Review the webhook execution logs to identify the volume and frequency of events and which content types or entries are generating the most traffic.
2.  Identify any automated workflows, CLI operations, or third-party integrations that may be triggering excessive publish or update events.
3.  If a recursive loop is identified (for example, a webhook triggers an update that re-triggers the webhook), break the loop by making the relevant field non-localizable, adding a payload check to skip no-op updates, or disabling the webhook temporarily.
4.  If the receiving endpoint is rate-limiting the requests, implement a queue-based receiver that can handle webhook events asynchronously without hitting endpoint rate limits.
5.  After identifying and fixing the source of excess events, re-enable or restore the webhook and monitor traffic levels.

After correcting the misconfiguration or loop, monitor the webhook execution logs for 24 hours. If 429 errors cease and the event volume returns to expected levels, the root cause has been resolved.
