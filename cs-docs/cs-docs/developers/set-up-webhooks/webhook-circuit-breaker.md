---
title: "[Set Up Your Project] - Webhook Circuit Breaker"
description: Documentation for Contentstack's Webhook Circuit Breaker (WCB), including retry behavior, timeout, disablement thresholds, and notification emails.
url: https://www.contentstack.com/docs/headless-cms/webhook-circuit-breaker
product: Contentstack
doc_type: guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Webhook Circuit Breaker

This page explains how Contentstack’s Webhook Circuit Breaker (WCB) works, including retry/timeout behavior, when webhooks are marked unhealthy and disabled, and how notifications are sent. It is intended for developers and administrators configuring webhooks and troubleshooting delivery failures to third-party notification URLs.

## Webhook Circuit Breaker

Contentstack currently follows an [exponential webhook retry policy](/docs/developers/set-up-webhooks/webhook-retry-policy) whenever any [webhook](/docs/developers/set-up-webhooks/about-webhooks) fails to send data to the desired notification URL or a session timeout occurs. We try to send data to that notification URL again four more times after certain resend intervals.

Some notification URLs may be invalid or may have turned unresponsive due to slow client servers. To stop retrying webhook requests that hit such inactive third-party URLs, Contentstack deploys the **Webhook Circuit Breaker** (**WCB**) implementation.

Contentstack waits for **30** seconds to receive data from the destination server. If the destination server fails to send data within this timeframe, the webhook request is timed out.

A webhook request may fail to retrieve data from a specific notification URL under the following scenarios:
- The provided domain name is either invalid or does not exist
- The API fails to respond with data within **30** seconds
- The destination server aborted the connection
- The webhook request returns an error with any of the HTTP status codes in the 5xx range

If a webhook request fails **10** times due to a 5xx error, 401 error, or timeout, the system detects the invalid URL and automatically disables the webhook. Contentstack then marks the faulty webhook with an **Unhealthy** status.

We will not send any webhook requests to the unresponsive third-party URL until the issue is resolved. If any other webhooks configured to the same URL also breach the threshold specified above, they will be automatically disabled.

Contentstack also sends a notification email to the concerned clients whenever the webhook circuit breaker disables any webhook. You can specify the email addresses of the users to be notified under the **Email Addresses to Notify** section when creating your webhook. Contentstack then sends the email alert to the specified users.

This email alert provides the following details:
- The reason for disabling the webhook
- The name of the stack where the faulty webhook resides
- A link to the disabled webhook's logs
- A link to Contentstack's Webhook Circuit Breaker documentation

The email alert notification contains the subject line - "**[stack_name] - [webhook_title] webhook disabled due to unhealthy notification endpoint**".

To enable the webhook again, you can visit the concerned stack and also debug the issue through the [webhook logs](/docs/developers/set-up-webhooks/view-webhook-logs).

## Common questions

### What causes a webhook to be marked **Unhealthy**?
A webhook is marked **Unhealthy** when a webhook request fails **10** times due to a 5xx error, 401 error, or timeout.

### How long does Contentstack wait before timing out a webhook request?
Contentstack waits for **30** seconds to receive data from the destination server before the webhook request is timed out.

### Will other webhooks using the same notification URL be affected?
If any other webhooks configured to the same URL also breach the threshold specified above, they will be automatically disabled.

### Who receives the notification email when a webhook is disabled?
You can specify the email addresses of the users to be notified under the **Email Addresses to Notify** section when creating your webhook, and Contentstack sends the email alert to the specified users.