---
title: "[Contentstack Launch] - Redeploy Automatically when Content is Published on CMS"
description: Redeploy a Launch site automatically when content is published in Contentstack CMS by creating a deploy hook and configuring it as a webhook.
url: https://www.contentstack.com/docs/launch/redeploy-automatically-when-content-is-published-on-CMS
product: Contentstack Launch
doc_type: how-to-guide
audience:
  - developers
  - devops
version: unknown
last_updated: 2026-03-25
---

# [Contentstack Launch] - Redeploy Automatically when Content is Published on CMS

This page explains how to configure Contentstack Launch to automatically redeploy a site when content is published in Contentstack CMS. It is intended for developers or teams managing Launch deployments who want redeployments to happen automatically after CMS publishing events.

## Redeploy Automatically when Content is Published on CMS

Launch allows you to set up a site to redeploy automatically when its content is modified in the CMS.

This step-by-step guide lets you redeploy automatically when content is published on your Contentstack CMS.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization
- A site on Launch that fetches data from the CMS

## Steps for execution

Follow the steps to redeploy automatically when content is published.

- Create a [deploy hook](./deploy-hooks.md) in Launch.
- Follow the steps to add the deploy hook as a Webhook to Contentstack CMS.  
  Copy the **deploy hook URL**.
- Go to your stack and then go to **Settings > Webhooks**.![Launch_Auto-Redeploy_Webhook_Left-Nav-New.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt212353b10f369a28/67c687d18c6f4e2673b80914/Launch_Auto-Redeploy_Webhook_Left-Nav-New.png)
- Click the **+ New Webhook** button.
- In the **Name** field, enter a suitable name for the Webhook.
- In the **URL To Notify** field, paste the deploy hook URL.![Launch_Auto-Redeploy_Webhook_Name_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdfae040171405081/65c1b031c258642b3108ae37/Launch_Auto-Redeploy_Webhook_Name_URL.png)
- In the **Trigger Conditions** field, enter the conditions for the deploy hook to trigger.
- Click the **Enable Webhook** toggle button.
- Click the **Save** button.![Launch_Auto-Redeploy_Webhook_Save.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte094d5d1fb214d23/65c1b03108722270a9495278/Launch_Auto-Redeploy_Webhook_Save.png)

  You will see the conditions updated on the Webhooks page.

- Go to the entry where you want to make the update.
- Make the necessary updates, and click the **Save** button.
- Click the **Publish** button, select Environment(s) and Language(s), and then click the **Send** button.

On clicking **Publish**, the Webhook gets triggered and the project gets automatically redeployed in Launch.

## Common questions

### Do I need a deploy hook in Launch to redeploy automatically?
Yes. The steps require you to create a deploy hook in Launch and use its URL in a Contentstack CMS webhook.

### Where do I configure the webhook in Contentstack CMS?
In your stack under **Settings > Webhooks**, using the **+ New Webhook** button.

### What action triggers the redeploy?
On clicking **Publish**, the Webhook gets triggered and the project gets automatically redeployed in Launch.

### What information do I need to paste into the webhook URL field?
You need to copy and paste the **deploy hook URL** into the **URL To Notify** field.