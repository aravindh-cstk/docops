---
title: "[Set Up Your Project] - Enable or Disable a Webhook"
description: Enable or disable a webhook in Contentstack.
url: https://www.contentstack.com/docs/headless-cms/enable-or-disable-a-webhook
product: Contentstack
doc_type: how-to
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Enable or Disable a Webhook

This page explains how to enable or disable a webhook in Contentstack. It is intended for developers or stack administrators who manage webhook behavior and need to turn webhook triggers on or off for a specific stack.

## Enable or Disable a Webhook

Contentstack allows you to enable and disable a [webhook](./about-webhooks.md) as per your requirements.

To enable or disable a webhook, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](../set-up-stack/about-stack.md) and perform the following steps:
- Click the “Settings” icon on the left navigation panel, and select **Webhooks**. This will display a list of your existing webhooks. You can also use the shortcut keys “alt + W” for Windows OS users, and “option + W” for Mac OS users to access webhooks.
- Click the vertical ellipses in the **Actions** column for the webhook you want to enable/disable, then select the **Enable**/**Disable** option.
- Alternatively, to enable or disable the webhook via the webhook page, use the **Enable Webhook** toggle.
- Click **Save**.

## API Reference

Here are the links to the API requests related to this action:
- [Create a webhook](../../../api-docs/api-detail/content-management-api.md#create-a-webhook)
- [Update a webhook](../../../api-docs/api-detail/content-management-api.md#update-webhook)

## Common questions

**How do I quickly open the Webhooks page from the stack UI?**  
Use the shortcut keys “alt + W” for Windows OS users, and “option + W” for Mac OS users.

**Where do I find the enable/disable option for a specific webhook?**  
Click the vertical ellipses in the **Actions** column for the webhook you want to enable/disable, then select the **Enable**/**Disable** option.

**Can I enable or disable a webhook from the webhook details page?**  
Yes, use the **Enable Webhook** toggle.

**Which API endpoints are related to creating or updating webhooks?**  
See: [Create a webhook](../../../api-docs/api-detail/content-management-api.md#create-a-webhook) and [Update a webhook](../../../api-docs/api-detail/content-management-api.md#update-webhook).