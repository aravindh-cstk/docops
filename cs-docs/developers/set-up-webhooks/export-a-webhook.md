---
title: "[Set Up Your Project] - Export a Webhook"
description: Export a webhook in JSON format from Contentstack.
url: https://www.contentstack.com/docs/headless-cms/export-a-webhook
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

Contentstack allows you to export a [webhook](./about-webhooks.md) in JSON format.

To export a webhook, log in to your [Contentstack account](https://www.contentstack.com/login), go to your [stack](../set-up-stack/about-stack.md), and perform the following steps:
- Click the “Settings” icon (press “S”) on the left navigation panel, and select **Webhooks **(press “alt + W” for Windows OS, and “option + W” for Mac OS).![Edit_a_Webhook_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt64c6872f751a8595/66a7375f7cd4c936333944c7/Edit_a_Webhook_1.png)
- Click the vertical ellipses in the **Actions** column for the webhook you want to export, then select the **Export** option from the dropdown menu.![Export_a_Webhook_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt93a92ed5ba974519/66a761f6c3ff6a80db09b857/Export_a_Webhook_2.png)

Alternatively, you can open the webhook and click the **Export** button at the bottom of the page to export it.

This will download the JSON file of the webhook into your local storage system.

## API Reference

Here are the links to the API requests related to this action:
- [Export a webhook](../../../api-docs/api-detail/content-management-api.md#export-a-webhook)
- [Import a webhook](../../../api-docs/api-detail/content-management-api.md#import-a-webhook)

## Common questions

**Q: What format is the exported webhook file in?**  
A: The webhook is exported in JSON format.

**Q: Where do I export a webhook from in the UI?**  
A: From **Settings** → **Webhooks**, use the **Actions** column menu for the webhook and select **Export**, or open the webhook and click **Export** at the bottom of the page.

**Q: What happens after I export a webhook?**  
A: This will download the JSON file of the webhook into your local storage system.

**Q: Is there an API for exporting or importing webhooks?**  
A: Yes. See **API Reference** links for [Export a webhook](../../../api-docs/api-detail/content-management-api.md#export-a-webhook) and [Import a webhook](../../../api-docs/api-detail/content-management-api.md#import-a-webhook).