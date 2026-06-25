---
title: "[Set Up Your Project] - Add a Preview Environment"
description: Add a Preview environment and publish content to preview it before publishing to production.
url: https://www.contentstack.com/docs/headless-cms/add-a-preview-environment
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Add a Preview Environment

This page explains how to create a Preview environment in Contentstack and publish content to it (manually or automatically) so you can preview entries before publishing them to your production environment. It is intended for developers and teams setting up environments and preview workflows for websites or apps.

## Add a Preview Environment

You can preview your [entry](../../content-managers/author-content/about-entries.md) before publishing it on the production [environment](./about-environments.md) of your website or app in a few simple steps. Previewing your content is a two-step process that involves the creation of a Preview environment and then publishing content on this created environment.

**Note**: We now offer the [Live Preview](../../content-managers/author-content/about-live-preview.md) feature to preview your content changes in real-time without saving or publishing them to an environment. Contact our [Support](mailto:support@contentstack.com) team to add the Live Preview feature to your Contentstack (organization) account subscription.

In this guide, you need to create a preview environment that will point to the location where a demo version of your application is hosted. Then, publish your content to this preview URL and view how your content will display on the live site.

**Additional Resource**: For websites developed using Gatsby and Contentstack, the [Gatsby Preview](../create-sidebar-extensions/gatsby-preview.md) extension lets you preview the content changes as soon as you make them.

**Note**: Contentstack no longer supports the ability to add multiple content deployment servers while setting up a specific [publishing environment](./about-environments.md) in Contentstack. We recommend that you instead make use of [Webhooks](../set-up-webhooks/about-webhooks.md) to trigger deployment to multiple web servers whenever you publish content to an environment.

Let’s look at the steps in detail.

## Add a Preview Environment

To add a preview environment, log in to your [Contentstack account](https://app.contentstack.com/), navigate to your stack, and perform the steps given below:

- Click on the "Settings" icon (press “S”) on the left navigation panel and select **Environments **(or press “**alt + E**” for Windows OS, and “option + **E**” for Mac OS). You will see the list of all the previously created environments for the stack.
- Click **+ New Environment** to create a new one. The **Create Environment** dialog box that appears allows you to add details about the destination.
- Enter a **Name** for the environment (in this case, "preview"). You can alternatively provide a name of your choice (maybe "development").
- Specify the **Base URL** for the environment under the "Base URLs" section. The base URL is the consistent part of the destination’s web address. To preview your content, you need to provide the address of your localhost as the base URL of the environment, for example, http://localhost:4000.

This creates your preview environment.

**Additional Resource:** To know more about environments and how to work with them, check out the [Environment](/docs/developers/set-up-environments) section.

Let’s see how to publish your content on this preview environment.

## Publish Content on the Preview Environment

Publishing your content on the preview environment can be done in two ways: **Manual** and **Automatic**.

In Manual method, users need to manually publish content on the preview environment in order to view their content. Whereas, in the Automatic method, users can write a script that will publish content every time an entry is either created or updated.

### A. Manual Method

In this method, all you need to do is publish the item (entry or asset) in your preview environment whenever you want to view your content. This method gives you the flexibility to publish your content on your preview environment only when it’s required.

### B. Automatic Method

You can create a setup such that whenever you create or update an entry in your stack, it will be automatically published to the preview environment.

In this method, you’ll need to create a webhook that triggers whenever content is either created or updated. So, whenever a new item (entry or asset) is created or existing items are updated, this webhook will be triggered to send a notification each time to the URL of your choice.

#### B. 1. Create a Webhook

To create a webhook, perform the steps given below:

Click on the “Settings” 'icon on the left navigation panel and select **Webhooks**. A list of all previously created environments for the stack will be displayed.

- Click on the **+ New Webhook** link at the top-right side of the page.
- Add the required details in all the fields. In Step 2. B. 2 given below, you will learn how to generate the URL for the **URL to notify** field. As of now, you can put a placeholder and proceed with the remaining steps. However, make sure you replace the placeholder URL with the actual URL once you create one in the next step.
- Add the parameters in the **When** section as given below.  
  **Any**: ‘Any’ (no change)  
  - **Select Module:** ‘Entry’
  - **Select Content Type (Optional)**: Select a content type only if needed, else leave it blank
  - **Select Action**: ‘Created’

Click on the ‘**+**’ (plus) icon to add another condition, and enter the following details:

- **Any**: ‘Any’ (no change)
- **Select Module**: ‘Entry’
- **Select Content Type (Optional)**: Select a content type only if needed, else leave it blank
- **Select Action**: ‘Updated’

Once this is done, save the webhook, and repeat the same process for adding webhooks for assets. Read more on Webhooks.

With this step, you have ensured that whenever you create or update an entry or asset, the webhook will be triggered. The details of the triggered event will be notified to the URL that you have specified in the webhook.

#### B. 2. Script to Publish Content on the Preview Environment

You need to set up a server and add a POST call to it that publishes content to the Preview environment. The URL of the POST call should be the **URL to notify** in your webhook. So, whenever you save content, the webhook will be triggered and the POST call will be executed.

## Preview the Published Content

After publishing your content on the preview environment, open your browser and point to http://localhost:4000. You should be able to see a basic structure of your content without any styling. If this content looks good to go ahead, you can then publish the content on the actual live site where your CSS stylesheet would make your content presentable.

## Common questions

### Do I need to publish content to preview it?
Yes. Previewing your content is a two-step process that involves the creation of a Preview environment and then publishing content on this created environment.

### What is the Base URL used for in a Preview environment?
The base URL is the consistent part of the destination’s web address, and for previewing you can use your localhost address as the base URL (for example, http://localhost:4000).

### What is the difference between Manual and Automatic publishing to the Preview environment?
Manual requires users to manually publish content on the preview environment, while Automatic uses a webhook and a script so content is published when an entry is created or updated.

### Is there an alternative to publishing for previewing changes?
Yes. The page notes the [Live Preview](../../content-managers/author-content/about-live-preview.md) feature to preview content changes in real-time without saving or publishing them to an environment.

Filename: set-up-your-project-add-a-preview-environment.md