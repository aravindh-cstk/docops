---
title: "[Set Up Your Project] - Export a Webhook"
description: Export a webhook in JSON format from Contentstack.
url: https://www.contentstack.com/docs/developers/set-up-webhooks/export-a-webhook
product: Contentstack
doc_type: how-to
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Export a Webhook

This page explains how to export a Contentstack webhook in JSON format. It is intended for developers or stack administrators who need to back up, migrate, or replicate webhook configurations across environments or stacks.

## Export a Webhook

Contentstack allows you to export a [webhook](/docs/developers/set-up-webhooks/about-webhooks) in JSON format.

To export a webhook, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](/docs/developers/set-up-stack/about-stack), and perform the following steps:
- Click the “Settings” icon (press “S”) on the left navigation panel, and select **Webhooks **(press “alt + W” for Windows OS, and “option + W” for Mac OS).
- Click the vertical ellipses in the **Actions** column for the webhook you want to export, then select the **Export** option from the dropdown menu.

Alternatively, you can open the webhook and click the **Export** button at the bottom of the page to export it.

This will download the JSON file of the webhook into your local storage system.

## API Reference

Here are the links to the API requests related to this action:
- [Export a webhook](/docs/developers/apis/content-management-api#export-a-webhook)
- [Import a webhook](/docs/developers/apis/content-management-api#import-a-webhook)

## Common questions

**Q: What format is the exported webhook file in?**  
A: The webhook is exported in JSON format.

**Q: Where do I export a webhook from in the UI?**  
A: From **Settings** → **Webhooks**, use the **Actions** column menu for the webhook and select **Export**, or open the webhook and click **Export** at the bottom of the page.

**Q: What happens after I export a webhook?**  
A: This will download the JSON file of the webhook into your local storage system.

**Q: Is there an API for exporting or importing webhooks?**  
A: Yes. See **API Reference** links for [Export a webhook](/docs/developers/apis/content-management-api#export-a-webhook) and [Import a webhook](/docs/developers/apis/content-management-api#import-a-webhook).