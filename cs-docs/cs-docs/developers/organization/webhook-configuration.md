---
title: "[Organization] - Webhook Configuration"
description: Configure the maximum connections per second for all webhooks in your organization.
url: https://www.contentstack.com/docs/developers/organization/webhook-configuration
product: Contentstack
doc_type: configuration-guide
audience:
  - developers
  - org-admins
version: current
last_updated: 2026-03-26
---

# [Organization] - Webhook Configuration

This page explains how organization administrators can configure the maximum connections per second for all webhooks in a Contentstack organization, and when to use this setting to control webhook connection throttling across webhook endpoints.

## Webhook Configuration

The “Webhook Configuration” feature lets you establish the maximum connections per second for all webhooks in your organization. This limit determines the maximum connections permitted to webhook URLs at any given time. Once this limit is reached, connections are efficiently throttled to avoid surpassing it.

By configuring [webhooks](/docs/developers/set-up-webhooks/about-webhooks), you can designate a specific URL for Contentstack to send data to whenever a relevant event occurs in your stack.

To set the connection limit for the webhooks in your organization, log in to your [Contentstack account](https://www.contentstack.com/login) and follow the steps below:
- Select the Organization from the dropdown on the header and click on the “Org Admin” icon in the left navigation panel.Or, you can simply click on the “Org Admin” cog beside the Organization that you intend to open.
- Click on the **Webhook Configuration** tab on the left panel.
- Enter the limit (between 2 to 100) in the **Connection Rate Limit** field.
- Click **Save** to save your configuration

**Note**: Due to the distributed nature of systems, the actual message rate may occasionally exceed the enforced rate limit. For instance, if a rate limit of 50 per second is set, an endpoint might receive messages at a rate of 53 or higher.

## Common questions

### What does the Connection Rate Limit control?
It controls the maximum connections per second permitted to webhook URLs at any given time for all webhooks in your organization.

### What is the allowed range for the Connection Rate Limit?
You can enter the limit (between 2 to 100) in the **Connection Rate Limit** field.

### What happens when the connection limit is reached?
Once this limit is reached, connections are efficiently throttled to avoid surpassing it.

### Can the actual message rate exceed the configured rate limit?
Yes. Due to the distributed nature of systems, the actual message rate may occasionally exceed the enforced rate limit (for example, a limit of 50 per second might result in 53 or higher).