---
title: "[Marketplace guides and apps] - Performance, Webhooks & Network Errors"
description: Troubleshooting guidance for Marketplace apps related to performance, webhooks, and network errors.
url: https://www.contentstack.com/docs/marketplace/performance-webhooks-network-errors
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - administrators
version: current
last_updated: 2026-05-11
---

# [Marketplace guides and apps] - Performance, Webhooks & Network Errors

This page covers common troubleshooting scenarios for Contentstack Marketplace apps, including webhook delivery failures, slow dashboard performance, gateway errors, and asset loading issues. It is intended for developers and stack administrators diagnosing Marketplace app behavior and should be used when apps fail to receive events, load slowly, or encounter network/hosting-related errors.

## Performance, Webhooks & Network Errors test

## 1. Webhook Failures for Marketplace Apps
Marketplace apps that rely on webhooks (e.g., Slack or Microsoft Teams notifications) stop sending updates.

**Resolution**
- Check the **Webhook Logs** in the Stack settings for failed delivery attempts.
- Verify that the app's target endpoint is not blocking Contentstack's IP addresses.
- Ensure the webhook status is set to "Enabled".

Trigger a test event (like an entry publish) and check if the app receives the notification.

## 2. App Dashboard Slow Performance (High Latency)
Marketplace apps take a long time (up to 3 minutes) to load their dashboards.

**Resolution**
- Check the size of the data being requested; minimize deep reference nesting in the app's initial fetch.
- Verify the status of the app's external hosting provider (e.g., AWS, Vercel).
- Implement caching on the app's backend to reduce frequent API calls.

The app dashboard loads in under 5 seconds on subsequent refreshes.

## 3. "Bad Gateway" (502) Errors on Public App UI
A public app displays a "502 Bad Gateway" error instead of its dashboard.

**Resolution**
- This usually indicates the app's hosting server (outside of Contentstack) is down or crashing.
- Check the server logs for the app's hosting environment for memory or timeout errors.
- Ensure the server is capable of handling the current volume of requests.

The app UI loads after the hosting server is restarted or scaled.

## 4. Marketplace App Assets Not Loading (HTTPS/SSL)
Images or styles within a Marketplace app fail to load, with browser errors regarding "Mixed Content".

**Resolution**
- All assets used by the app must be served over **HTTPS**.
- Verify that the hosting server has a valid SSL certificate.
- Check for hardcoded http:// links in the app's source code and update them to https://.

All app assets load without security warnings in the browser.

## 5. Retrieving full entry data in translation webhook payloads
Receiving webhook notifications for translation events may result in missing translatable fields when payload settings are restricted. This prevents external systems from accessing the full entry content required for translation.

**Root cause**

The "Concise Payload" configuration option is enabled, which limits the webhook response to a minimal set of metadata instead of the full entry body.

**Resolution**
- Navigate to the Webhook configuration page in the stack settings.
- Locate the specific webhook used for the translation workflow.
- Uncheck the "Concise Payload" checkbox to allow the transmission of the full entry details.

After disabling the concise payload option, trigger a translation event and inspect the webhook logs.

If the payload contains the full set of translatable fields, the configuration update is successful.

## Common questions

### Where can I check whether a webhook delivery failed?
Check the **Webhook Logs** in the Stack settings for failed delivery attempts.

### What is the most common cause of a 502 Bad Gateway error in a Marketplace app?
This usually indicates the app's hosting server (outside of Contentstack) is down or crashing.

### How do I fix “Mixed Content” errors for Marketplace app assets?
All assets used by the app must be served over **HTTPS**, with a valid SSL certificate, and any hardcoded `http://` links should be updated to `https://`.

### Why are translation webhook payloads missing translatable fields?
The "Concise Payload" configuration option is enabled, which limits the webhook response to a minimal set of metadata instead of the full entry body.