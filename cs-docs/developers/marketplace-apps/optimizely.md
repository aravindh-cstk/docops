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
- Go to your Optimizely project and click **Settings** from the left navigation panel. You will get the **Project ID** under the **Snippet Details** heading.![Optimizely-Project-ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e46a8fc86692fed/653b9ef2008d3a0407d4b476/Optimizely-Project-ID.png)
- To get the **Access Token**, click **Profile** in the bottom-left navigation panel. Now go to the **API Access** tab, and click the **Generate New Token** button.![Optimizely-Generate-Access-Token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt049e65c2c19c1ff6/653b9e905774ea0407dfb5d6/Optimizely-Generate-Access-Token.png)
- In the **Generate New Token** modal, enter the **Token Name**, select the **User** email ID, and then click the **Create** button.![Optimizely-Generate-Access-Token-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfd437c39c6aa061f/653b9e91e7cbbe04078473c9/Optimizely-Generate-Access-Token-Modal.png)
- A new token will be created. Copy and paste it to your clipboard as it will only be visible once.![Optimizely-Auth-Token](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49f7a8f86d35dbb3/653b9e9119aeb1040a013e22/Optimizely-Auth-Token.png)
- Save the **Project ID** and **Access Token** to use in [Step 2](#install-and-configure-the-optimizely-app-in-contentstack-marketplace).

## Install and Configure the Optimizely App in Contentstack Marketplace
Follow the steps given below to install the Optimizely app in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).
- From the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Optimizely** app and click **Install**.![Marketplace_optimizely.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt131ddfe63e8e7b2d/69dc7efabde3a140e0086da4/Marketplace_optimizely.png)
- In the pop-up window, select the stack where you want to install the Optimizely app, accept the terms of service, and click the **Install** button.![Optimizely-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4111d35a42109246/65fdc006bcecd4d4d9f591cf/Optimizely-App-Install.png)
- On the **Configuration** screen, enter the following details:**Optimizely Credentials**: Enter the **Project ID** and **Auth Token** (Access Token) retrieved from your Optimizely account in [Step 1](#retrieve-credentials-from-optimizely).
- **Choose the Optimizely Keys to Save in Entry**: Choose how to save the data fetched from the Optimizely account in Contentstack entries.If you select the **All Fields** option, you can select only a limited number of products (variations) in the entry.
- For **Custom Fields**, you can search and add specific Optimizely Keys you want to save in entries. By default, **name**, **id**, **variations**, and **type** options are already selected inside the dropdown.

**Note**: The Save In Entry configuration setting only applies to the variations field.
- Click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Optimizely-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt02d5e8cea6f01413/65fdc01101e311270ccb041c/Optimizely-UI-Locations.png)
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

  **Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Optimizely app.

## Use the Optimizely App within your Stack Entry
To use the Optimizely app within an entry of your stack, follow the steps given below:

Go to your stack, click the [Content Models](../marketplace-platform-guides/content-models/about-content-models.md) icon in the left navigation panel, and click the **+ New Content Type** button.
- If you want to create a new content type, select **Create New**. To use the prebuilt one, click **Use Prebuilt**.

  **Additional Resource**: For more information on prebuilt content models, please refer to the [Import Prebuilt Content Models](../create-content-types/import-prebuilt-content-models.md) documentation.
- [Create a content type](../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:![Optimizely-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc701b7337fa6809c/65fdc0075d367a3b01d342a3/Optimizely-Content-Type.png)
- In the **Content Type Builder** page, add a [Custom](../create-content-types/custom.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **Optimizely Audience**, and click the **Proceed** button.![Optimizely-Audience-Add-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt135dcd952ee5a295/65fdc0062531f4935eee455a/Optimizely-Audience-Add-In-Custom-Field.png)
Change the **Display Name** of the custom field to your choice, for example, **Optimizely Audience Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** for your custom field. This adds the Optimizely Audience in the custom field.![Optimizely-Audience-Added-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d0e1e600e652c10/65fdc006aabcc9c77a2f3d83/Optimizely-Audience-Added-In-Custom-Field.png)
- Add another [Custom](../create-content-types/custom.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **Optimizely Variations**, and click the **Proceed** button.![Optimizely-Variations-Add-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdcbc7b601d3252e8/65fdc0114cea19683ab84ab6/Optimizely-Variations-Add-In-Custom-Field.png)This adds the Optimizely Variations in the custom field. You can change the display name of the custom field as required.![Optimizely-Variations-Added-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0dadc3696eb8f3f3/65fdc011d0575561b30001e7/Optimizely-Variations-Added-In-Custom-Field.png)
- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the Optimizely app, create an entry for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to [create a new entry](../../content-managers/author-content/create-an-entry.md) for the above content type, and then click **Proceed**.
You can see the Optimizely app’s custom field on your entry page as shown below:![Optimizely-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8bd40ff2db71b303/65fdc007c340add23ef66d51/Optimizely-Sample-Entry.png)
- In the Optimizely Audience custom field, click the **+ Add Audience(s)** button.![Optimizely-Audience-Add-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte41d7b2a1f6feef4/65fdc005fc58c821b7142494/Optimizely-Audience-Add-Button.png)
- Select the audiences and then click the **+ Add Audience(s)** button to add the audiences in the entry.![Optimizely-Audience-Modal](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltafc4aea2e3761bcc/65fdc0068f4444b819c3a236/Optimizely-Audience-Modal.png)The audience(s) you selected are referenced within your entry:![Optimizely-Audience-View-In-Custom-Field](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3709643bb2454b48/65fdc0066f7fa72ea9eaca93/Optimizely-Audience-View-In-Custom-Field.png)
- In the Optimizely Variations custom field, click the **+ Add Variation(s)** button.![Optimizely-Variations-Add-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1f664510111cb20f/65fdc011bdfec313e75822d2/Optimizely-Variations-Add-Button.png)
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