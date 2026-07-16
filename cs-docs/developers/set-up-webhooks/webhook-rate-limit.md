---
title: "[Set Up Your Project] - Webhook Rate Limit"
description: Webhook Rate Limit for webhook executions per minute per organization.
url: https://www.contentstack.com/docs/headless-cms/webhook-rate-limit
product: Contentstack
doc_type: concept
audience:
  - developers
  - administrators
version: latest
last_updated: 2026-03-26
---

# [Set Up Your Project] - Webhook Rate Limit

This page explains what the Webhook Rate Limit is in Contentstack, who it applies to (organizations using webhooks), and when to reference it (when planning, configuring, or troubleshooting webhook execution throughput and delays).

## Webhook Rate Limit

The webhook rate limit is the maximum number of [webhook](./about-webhooks.md) executions that an organization can perform per minute. It ensures that all organizations get a fair chance in executing their webhooks. Till now, Contentstack used shared resources to execute webhooks for all the organizations and this mutual dependency in turn affects the overall productivity.

If there is no rate limit, then there are no restrictions on the webhook executions for any organization. This means that any organization can lead and flood the network that causes a delay in the webhook executions of other organizations.

Now, Contentstack introduces Webhook Rate Limit that regulates the webhook executions and aids efficient executions.

Once the rate limit reaches, any further messages are executed in the next available rate limit window.

**Note:** The rate limit is 200 executions per minute per organization.

## Common questions

**Q: What happens when my organization hits the webhook rate limit?**  
A: Once the rate limit reaches, any further messages are executed in the next available rate limit window.

**Q: What is the webhook rate limit value?**  
A: The rate limit is 200 executions per minute per organization.

**Q: Is the webhook rate limit applied per webhook or per organization?**  
A: The webhook rate limit is the maximum number of webhook executions that an organization can perform per minute.