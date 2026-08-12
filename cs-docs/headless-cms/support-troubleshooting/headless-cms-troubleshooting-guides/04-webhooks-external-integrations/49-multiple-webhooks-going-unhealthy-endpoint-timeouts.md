---
title: "Multiple Webhooks Going Unhealthy - Endpoint Timeouts"
description: "Multiple Webhooks Going Unhealthy - Endpoint Timeouts"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/04-webhooks-external-integrations/49-multiple-webhooks-going-unhealthy-endpoint-timeouts
doc_type: faq
_cms_section_uid: cs6ae5f1c8c8a2cb90
_cms_faq_uid: csc16470ca2b8c9b58
---

# Multiple Webhooks Going Unhealthy - Endpoint Timeouts

Multiple webhooks on a production stack become unhealthy simultaneously. Re-enabling them provides temporary recovery before timeouts return. The webhook execution logs show consistent endpoint timeouts.

**Root Cause**

Engineering review of logs confirmed the root cause was the webhook endpoint processing being too slow relative to Contentstack’s delivery timeout threshold. When the receiving endpoint takes too long to respond, Contentstack records the delivery as a timeout failure. After repeated timeouts, the circuit breaker disables the webhook. On re-enable, the endpoint briefly accepts requests before slowing down again, creating a cycle of re-enable and re-disable.

**Resolution**

**Optimize the webhook receiver for fast acknowledgment:**

1.  Return a 200 OK response immediately upon receiving the webhook, before any processing logic runs. Store the payload in a queue (AWS SQS, Redis, RabbitMQ, or similar) and process it asynchronously.
2.  Review the endpoint’s processing time. Any synchronous operation (database writes, API calls to third parties, cache invalidations) performed before the 200 response is returned adds to the response time.
3.  If the endpoint is hitting Contentstack’s timeout threshold even with fast acknowledgment, contact Contentstack Support to confirm the configured timeout value and whether it can be extended for the specific integration.

**Monitor endpoint health proactively:**

1.  Set up external health monitoring (AWS CloudWatch, Datadog, or equivalent) on the webhook endpoint to alert before Contentstack’s circuit breaker trips.
2.  Configure the ‘Email Addresses to Notify’ field in the webhook settings to receive immediate notification when Contentstack auto-disables the webhook.

After optimizing the receiver to return 200 immediately and process asynchronously, re-enable the webhooks and monitor the execution logs. If timeouts cease and the webhooks remain healthy, the response time optimization was sufficient.
