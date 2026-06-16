---
title: "[Set Up Your Project] - Webhook Retry Policy"
description: Contentstack webhook exponential retry policy behavior, timeouts, and resend intervals.
url: https://www.contentstack.com/docs/developers/set-up-webhooks/webhook-retry-policy
product: Contentstack
doc_type: guide
audience:
  - developers
  - integrators
version: unknown
last_updated: 2026-03-25
---

# [Set Up Your Project] - Webhook Retry Policy

This page explains how Contentstack retries failed webhook deliveries using an exponential backoff strategy, including timeout behavior and retry intervals. It is intended for developers and integrators configuring webhook endpoints and troubleshooting delivery failures.

## Webhook Retry Policy

Contentstack follows an **exponential webhook retry policy** whenever any [webhook](/docs/developers/set-up-webhooks/about-webhooks) fails to send data to the desired notification URL or a session timeout occurs. We trigger the retry policy whenever a webhook request returns a non-2XX status code, i.e. 4XX or 5XX error codes, in the response.

**Note**: Contentstack waits for **30 seconds** to receive data from the destination server. If the destination server fails to send data within this timeframe, then the webhook request is timed out.

The exponential retry policy attempts to send data to the destination URL again **four** more times after certain intervals. Setting a resend interval avoids several requests constantly hitting the server and prevents database overload.

Contentstack sets the resend interval time to **5 seconds**, by default, for the first retry attempt. The interval time then increases exponentially according to the retry instance. The exponential backoff formula will look as follows:

```
{resend_interval} + {retry_instance} ^ 4
```

For instance, if the resend interval lasts for 5 seconds and the webhook can retry sending data four more times, then the exponential backoff strategy will calculate retry intervals as follows:

| Retry Instance No. | Next Resend Interval (seconds) |
|---|---|
| 1 | 5 |
| 2 | 25 |
| 3 | 125 |
| 4 | 625 |

If the webhook request fails to run successfully after the last retry attempt, Contentstack stops retrying and marks the request with a failed status. You can [view the webhook logs](/docs/developers/set-up-webhooks/view-webhook-logs) to get more details on the failed request.

## Common questions

### When does Contentstack trigger the webhook retry policy?
We trigger the retry policy whenever a webhook request returns a non-2XX status code, i.e. 4XX or 5XX error codes, in the response, or a session timeout occurs.

### How long does Contentstack wait before timing out a webhook request?
Contentstack waits for **30 seconds** to receive data from the destination server.

### How many times will Contentstack retry a failed webhook request?
The exponential retry policy attempts to send data to the destination URL again **four** more times after certain intervals.

### Where can I find details about failed webhook requests?
You can [view the webhook logs](/docs/developers/set-up-webhooks/view-webhook-logs) to get more details on the failed request.