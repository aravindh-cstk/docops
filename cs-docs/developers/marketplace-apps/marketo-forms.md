---
title: "[Marketplace guides and apps] - Marketo Forms App Installation Guide"
description: Marketo Forms App Installation Guide
url: https://www.contentstack.com/docs/marketplace/marketo-forms
product: Contentstack
doc_type: marketplace-app-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Marketo Forms App Installation Guide

This page explains how to install and configure the Marketo Forms app from the Contentstack Marketplace, retrieve required credentials from Marketo, and use the app inside a Contentstack entry. It is intended for Contentstack stack owners/admins and developers who need to display Marketo forms on a website via published entries.

## Marketo Forms App Installation Guide

Marketo Forms, tightly integrated with Marketo's robust marketing automation platform, serve as dynamic web forms that play a key role in data acquisition from websites. Thus, significantly bolstering lead generation efforts of the organization's marketing teams.

By simplifying the creation and management of forms, Marketo Forms streamlines the user experience and empowers marketers to excel in lead nurturing and conversion within their campaigns.

With the Contentstack Marketplace Marketo Forms app, you can fetch and display forms from the Marketo Forms dashboard within your entries. These forms will be visible on your website once the entry gets published.

## Prerequisites

- [Marketo Forms account](https://app-sj32.marketo.com/homepage/login)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Marketo Forms app within your stack.

## Steps for Execution

- [Retrieve Credentials from Marketo Forms](#retrieve-credentials-from-marketo-forms)
- [Install and Configure the Marketo Forms app in Contentstack Marketplace](#install-and-configure-the-marketo-forms-app-in-contentstack-marketplace)
- [Use the Marketo Forms app within your Stack Entry](#use-the-marketo-forms-app-within-your-stack-entry)

## Retrieve Credentials from Marketo Forms

To get the credentials for Marketo Forms, follow the steps given below:

Log in to the [Marketo Forms account](https://app-sj32.marketo.com/homepage/login) using your Marketo Forms account credentials.

- The Marketo Forms dashboard will open. From the top menu, click the **Admin** tab.![Marketo-Forms-Dashboard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt68ec4af9a1f4de82/653a03693775888ade64a09b/Marketo-Forms-Dashboard.png)

**Note**:

- You need admin access to retrieve the credentials from the Marketo Forms account.
- Only admins can add the forms in the Marketo dashboard.
- From the left navigation panel, inside the **Integration** section, click **Munchkin** to get the **Munchkin Account ID** as shown in the following screenshot:![Marketo-Forms-Credentials-Munchkin-Id](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1021dd8822396061/653a24eeee9a37040a19c48e/Marketo-Forms-Credentials-Munchkin-Id.png)
- Now click the **LaunchPoint** option, under **Integration**, then click the **New Service** button to create a new service.![Marketo-Forms-New-Service](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb3c81929005602d1/653a24ee2e4852040ab38706/Marketo-Forms-New-Service.png)
- In the **New Service** modal, enter the required details and click the **Create** button.![Marketo-Forms-New-Service-Create](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc648aa8ee9b8671c/653a24eed84a4b040a15d9d2/Marketo-Forms-New-Service-Create.png)
- Now, a newly created service is visible on the dashboard. Click **View Details** to get the credentials.![Marketo-Forms-New-Service-Created](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21aa836e02e2b07f/653a290df1cd05040a08252e/Marketo-Forms-New-Service-Created.png)
- In the **Details** modal, you will get the **Client Id** and **Client Secret** as shown below:![Marketo-Forms-Credentials-Client-Id-Client-Secret](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt180957290fdac2ff/653a24edbd5de50c597c872e/Marketo-Forms-Credentials-Client-Id-Client-Secret.png)
- Copy these credentials to your clipboard to use in [Step 2](#install-and-configure-the-marketo-forms-app-in-contentstack-marketplace).

## Install and Configure the Marketo Forms app in Contentstack Marketplace

Follow the steps given below to install the Marketo Forms app in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- From the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Marketo Forms** app and click **Install App**.![Marketplace-Marketo-Forms.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5739176dc9e488d8/69eea4d90050b661e1a3863e/Marketplace-Marketo-Forms.png)
- In the pop-up window, select the stack where you want to install the Marketo Forms app, accept the terms of service, and click the **Install** button.![Marketo-Forms-Install-App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0740a1a47694ac5b/653a0369304efa1be8041058/Marketo-Forms-Install-App.png)
- On the **Configuration** screen, enter the following details:

**Marketo Forms Credentials**: Enter the **Munchkin ID**, **Client ID**, and **Client Secret** retrieved from your Marketo Forms account in [Step 1](#retrieve-credentials-from-marketo-forms).

- **Choose the Marketo Forms Keys to Save in Entry**: Choose how to save the data fetched from the Marketo Forms account in Contentstack entries.

If you select the **All Fields** option, all the Marketo Forms keys will be saved in the entry.

- For **Custom Fields**, you can search and add specific Marketo Forms Keys that you want to save in entry.

If you select **Custom Fields**, then the **Marketo Forms Keys** dropdown appears. By default, **id**, **name**, and **url** options are already selected inside the dropdown.

- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Marketo-Forms-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta80be68f3217213d/65b8242841400c722e458887/Marketo-Forms-UI-Locations.png)
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

**Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.

- Click the **Save** button.
- Click **Open Stack** to start using the Marketo Forms application.

## Use the Marketo Forms app within your Stack Entry

To use the  Marketo Forms application within an entry of your stack, follow the steps given below:

Go to your stack, click the [Content Models](../marketplace-platform-guides/content-models/about-content-models.md) icon in the left navigation panel, and click the **+ New Content Type** button.

- [Create a content type](../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:![Marketo-Forms-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc07a38a6e1bc205c/653a0377c41fbc5928b6b42c/Marketo-Forms-Content-Type.png)
- In the **Content Type Builder** page, add a [Custom](../create-content-types/custom.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension/App**, select **Marketo Forms**, and click the **Proceed** button.

Change the **Display Name** of the custom field to your choice, for example, **Marketo Forms Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** for your custom field. This adds the Marketo Forms app in the custom field.

- After adding the app in a custom field, click **Save** or **Save and Close** to save your changes.
- To use the Marketo Forms app, create an entry for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to [create a new entry](../../content-managers/author-content/create-an-entry.md) for the above content type, and then click **Proceed**.

You can see the Marketo Forms app’s custom field on your entry page as shown below:

- In the custom field, select a form from the dropdown you want to display on your website.![Marketo-Forms-Select-Forms-Dropdown](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5aad12c2ab74a311/6571c45d316b0c19d56e1da2/Marketo-Forms-Select-Forms-Dropdown.png)

**Note**: You can select one form in each Contentstack custom field.

- Click the **Preview** button to view the form. You will be redirected to the Marketo Forms dashboard.![Marketo-Forms-Preview](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1fae6d710096a449/6571c438473e50d992a53e3a/Marketo-Forms-Preview.png)

**Note**: Preview access is exclusively accessible to users who have an active Marketo Forms account.

- Click **Save** to save the entry.
- Once you publish the entry, you can see the form on your website.

## Common questions

### What credentials do I need to configure the Marketo Forms app?
You need the **Munchkin ID**, **Client ID**, and **Client Secret** retrieved from your Marketo Forms account.

### Do I need admin access in Marketo to retrieve credentials?
Yes. You need admin access to retrieve the credentials from the Marketo Forms account.

### Can I select multiple forms in a single custom field?
No. You can select one form in each Contentstack custom field.

### Who can use the Preview button for a form?
Preview access is exclusively accessible to users who have an active Marketo Forms account.