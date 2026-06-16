---
title: "[Set Up Your Project] - Import a Webhook"
description: Import a webhook by uploading a JSON file, or update an existing webhook by importing JSON.
url: https://www.contentstack.com/docs/developers/set-up-webhooks/import-a-webhook
product: Contentstack
doc_type: how-to
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Set Up Your Project] - Import a Webhook

This page explains how to import a webhook into a Contentstack stack using a JSON file, including how to create a new webhook or update an existing one. It is intended for developers or stack administrators managing webhooks, and should be used when you need to migrate, restore, or modify webhook configurations via import.

## Import a Webhook

You can create a new webhook or update an existing webhook by importing a JSON file with the webhook data.

## Import a new webhook

To import a webhook, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](/docs/developers/set-up-stack/about-stack), and Perform the steps given below:

- Click the “Settings” icon (press “S”) on the left navigation panel and select **Webhooks** (press “alt + W” for Windows OS, and “option + W” for Mac OS).
- Click the "Import Webhook" icon on the top right side of the page.
- Browse and select the appropriate JSON file and click **Import**.

This imports your webhook.

## Update a webhook by importing JSON file

Open the webhook that you need to update, and perform the following steps:

- Click the **Import** button available at the bottom of the webhook page.
- Browse and select the appropriate JSON file and click **Import**.

This will update your existing webhook.

## API Reference

To import the JSON body of a webhook in your stack via API, refer to the [Import a webhook](/docs/developers/apis/content-management-api#import-a-webhook) API request.

## Common questions

**Can I use the same JSON file to create a new webhook and update an existing webhook?**  
Yes. You can create a new webhook or update an existing webhook by importing a JSON file with the webhook data.

**Where do I find the Import Webhook option in the UI?**  
Click the “Settings” icon (press “S”) on the left navigation panel and select **Webhooks**, then click the "Import Webhook" icon on the top right side of the page.

**How do I import a webhook via API instead of the UI?**  
Refer to the [Import a webhook](/docs/developers/apis/content-management-api#import-a-webhook) API request.

**What happens after I import a JSON file into an existing webhook?**  
This will update your existing webhook.