---
title: "[Marketplace guides and apps] - Optimizely App Installation Guide"
description: Install and configure the Optimizely app in the Contentstack Marketplace to fetch and display audiences and variations within entries.
url: https://www.contentstack.com/docs/marketplace/optimizely
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Optimizely App Installation Guide

This page explains how to install and configure the Optimizely app from the Contentstack Marketplace, retrieve required Optimizely credentials, and use the app inside Contentstack entries. It is intended for Contentstack stack owners/admins and developers who need to reference Optimizely audiences and variations within entry fields.

## Optimizely App Installation Guide

Optimizely is an experimentation and optimization platform that enables businesses to conduct A/B tests and personalize digital experiences. It helps organizations analyze and improve website and app performance by testing different content variations and targeting specific audience segments, ultimately enhancing user engagement and conversion rates.

The Contentstack Marketplace lets you install the Optimizely app in your stack to fetch and display audiences and variations from the Optimizely account within your entries.

## Prerequisites
- [Optimizely account](https://app.optimizely.com/signin)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure Optimizely within your stack.

## Steps for Execution
- [Retrieve Credentials from Optimizely](#retrieve-credentials-from-optimizely)
- [Install and Configure the Optimizely App in Contentstack Marketplace](#install-and-configure-the-optimizely-app-in-contentstack-marketplace)
- [Use the Optimizely App within your Stack Entry](#use-the-optimizely-app-within-your-stack-entry)

## Retrieve Credentials from Optimizely
To get the credentials for Optimizely, follow the steps given below:

Log in to the [Optimizely account](https://app.optimizely.com/signin) using your Optimizely account credentials.
- Go to your Optimizely project and click **Settings** from the left navigation panel. You will get the **Project ID** under the **Snippet Details** heading.
- To get the **Access Token**, click **Profile** in the bottom-left navigation panel. Now go to the **API Access** tab, and click the **Generate New Token** button.
- In the **Generate New Token** modal, enter the **Token Name**, select the **User** email ID, and then click the **Create** button.
- A new token will be created. Copy and paste it to your clipboard as it will only be visible once.
- Save the **Project ID** and **Access Token** to use in [Step 2](#install-and-configure-the-optimizely-app-in-contentstack-marketplace).

## Install and Configure the Optimizely App in Contentstack Marketplace
Follow the steps given below to install the Optimizely app in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).
- From the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Optimizely** app and click **Install**.
- In the pop-up window, select the stack where you want to install the Optimizely app, accept the terms of service, and click the **Install** button.
- On the **Configuration** screen, enter the following details:**Optimizely Credentials**: Enter the **Project ID** and **Auth Token** (Access Token) retrieved from your Optimizely account in [Step 1](#retrieve-credentials-from-optimizely).
- **Choose the Optimizely Keys to Save in Entry**: Choose how to save the data fetched from the Optimizely account in Contentstack entries.If you select the **All Fields** option, you can select only a limited number of products (variations) in the entry.
- For **Custom Fields**, you can search and add specific Optimizely Keys you want to save in entries. By default, **name**, **id**, **variations**, and **type** options are already selected inside the dropdown.

**Note**: The Save In Entry configuration setting only applies to the variations field.
- Click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.**Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Optimizely app.

## Use the Optimizely App within your Stack Entry
To use the Optimizely app within an entry of your stack, follow the steps given below:

Go to your stack, click the [Content Models](../marketplace-platform-guides/content-models/about-content-models.md) icon in the left navigation panel, and click the **+ New Content Type** button.
- If you want to create a new content type, select **Create New**. To use the prebuilt one, click **Use Prebuilt**.**Additional Resource**: For more information on prebuilt content models, please refer to the [Import Prebuilt Content Models](../create-content-types/import-prebuilt-content-models.md) documentation.
- [Create a content type](../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:
- In the **Content Type Builder** page, add a [Custom](../create-content-types/custom.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **Optimizely Audience**, and click the **Proceed** button.
Change the **Display Name** of the custom field to your choice, for example, **Optimizely Audience Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** for your custom field. This adds the Optimizely Audience in the custom field.
- Add another [Custom](../create-content-types/custom.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **Optimizely Variations**, and click the **Proceed** button.This adds the Optimizely Variations in the custom field. You can change the display name of the custom field as required.
- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the Optimizely app, create an entry for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to [create a new entry](../../content-managers/author-content/create-an-entry.md) for the above content type, and then click **Proceed**.
You can see the Optimizely app’s custom field on your entry page as shown below:
- In the Optimizely Audience custom field, click the **+ Add Audience(s)** button.
- Select the audiences and then click the **+ Add Audience(s)** button to add the audiences in the entry.The audience(s) you selected are referenced within your entry:
- In the Optimizely Variations custom field, click the **+ Add Variation(s)** button.
- In the **Add Variations** modal, select the **Experiment Type** from the dropdown. There are two experiment types: **Experiment** and **Campaign**.If you select **Experiment** as the Experiment Type, then select the experiment from the **Experiment List** drop-down.
- If you select **Campaign** as the Experiment Type, then select the campaign from the **Campaign List** dropdown, and then choose the experiment from the **Experiment List** drop-down.After selecting the experiment, select the variations you want to add, then click the **+ Add Variation(s)** button to add them in the entry.

The variations(s) you selected are referenced within your entry:
- Click **Save** to save the entry.
- Once you publish the entry, you can see the audiences and variations on your website.

## Common questions

### What credentials do I need from Optimizely to configure the app?
You need the **Project ID** and an **Access Token** from your Optimizely account.

### Who can install the Optimizely app in Contentstack?
You need access to the Contentstack Organization/Stack as the Owner/Admin.

### Where do the Optimizely audiences and variations appear in Contentstack?
They appear in your entry via custom fields configured as **Optimizely Audience** and **Optimizely Variations**.

### What does the “Save In Entry” configuration affect?
The **Note** states: The Save In Entry configuration setting only applies to the variations field.