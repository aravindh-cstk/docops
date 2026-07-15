---
title: "[Marketplace guides and apps] - Form.io App Installation Guide"
description: Form.io App Installation Guide
url: https://www.contentstack.com/docs/marketplace/form-io
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: v1
last_updated: 2026-03-25
---

# [Marketplace guides and apps] - Form.io App Installation Guide

This page explains how to install and configure the Form.io app from the Contentstack Marketplace, fetch required credentials from Form.io, and use the app inside a Contentstack entry. It is intended for Contentstack stack owners/admins and developers who want to fetch and display Form.io forms within entries and publish them to a website.

## Form.io App Installation Guide

Form.io is a data and form management platform for advanced web-based applications. It provides a serverless application architecture through which you can easily embed forms through API within your application. It has a flexible user interface designed to ease the form creation process. You can drag and drop the elements to create your customized forms.

With the Contentstack Marketplace Form.io app you can fetch and display forms from the Form.io dashboard within your entries. You can view the form on your website once the entry gets published.

## Prerequisites

- [Form.io account](https://portal.form.io/#/auth)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin.

This step-by-step guide to install and configure Form.io within your stack.

## Steps for Execution

- [Fetch Credentials from Form.io](#fetch-credentials-from-form-io)
- [Install and Configure Form.io in Contentstack Marketplace](#install-and-configure-form-io-in-contentstack-marketplace)
- [Use Form.io within your Stack Entry](#use-form-io-within-your-stack-entry)

## Fetch Credentials from Form.io

You must fetch the credentials from the Form.io dashboard to configure the app. Follow the steps to do so:

Go to [Form.io](https://portal.form.io/#/auth) and sign up to create a new account.

- Click the** + Create Project** button. A pop-up appears.
- Fill out the details such as **Project Title**, **Description**, and so on to create a new project. Once done, click the **Create Project** button.
- In the left navigation panel, click **Settings**.
- Under **Settings**, click **API Settings**.![1-Form-io-API-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7592fd41c4071a02/6569e3ce7c56dd68f9a62076/Marketplace_Form_API_Settings_Final.png)
- Click the **+ Add Another** button.![2-Form-io-API-Settings-Add-Another](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcc20719e50de4335/6569e3ced20aca6fdba93e53/Marketplace_Form_API_Settings_Add_Another.png)
- This generates an **API Key** for your project.
- Below the form title, you can see the **Live stage** section. This serves as the **base URL** for the configuration page within Contentstack.![3-Form-io-Live-Stage](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf04c99979a46e4e/6569e3ceec7994341396a678/Marketplace_Form_Live_Stage.png)

**Note**: In the Access section, you can change the project-level access permissions for different roles, such as **Administrator**, **Authenticated**, **Anonymous**, and **Everyone**.

## Install and Configure Form.io in Contentstack Marketplace

To install the app, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps:

In the left-hand side primary navigation, click the **Marketplace** icon.

- Click **Apps** from the left panel.
- Within the Marketplace, you can see the available apps. Hover over the **Form.io** app and click **Install**.![Marketplace_Form.io.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb4aa2c2f0bb52c1/69eea2ba74ba2b0d07ca2cdb/Marketplace_Form.io.png)
- In the popup window, select the stack where you want to install the Form.io app, accept the **Terms of Service**, and click the **Install** button.![6-Form-io-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltefa85d01d2a723a7/679bec593064aa4eab542dfc/6-Form-io-App-Install.png)
- On the **Configuration** page, enter the following details:  
  **Form.io Base URL and Form.io API Key**: Enter the **Form.io Base URL** and **Form.io API Key** you retrieved from the Form.io dashboard in [step 1](#fetch-credentials-from-form-io).
- **Choose the Form.io Keys to Save in Entry**: Choose how to save the data fetched from the Form.io account in Contentstack entries. If you select the **All Fields** option, you can add all keys from the response data structure. With **Custom Fields**, you can define and select the data structure of the form (keys) you want to save in the entry.  
  If you select Custom Fields, then the Form.io Keys drop-down appears in which **_id**, **title**, and **name** keys options are selected by default. If you want to create a new key, click the **New Key Field** option.

  In the **Add Form.io Key Path** modal, enter the **Form.io Key Path** and click the **Create and Apply** button to create a new key.
- Click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![10-Form-io-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2d5112560bc31fc8/679bec5ae72922241c5367c4/10-Form-io-UI-Locations.png)
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

  **Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the Form.io application.

## Use Form.io within your Stack Entry

To use the Form.io app within an entry of your stack, follow the steps given below:

Go to your stack, and click the **Content Models** icon on the left navigation panel, and click the **+ New Content Type** button.

- [Create a content type](../create-content-types/create-a-content-type.md) by adding relevant details as displayed below:![11-Form-io-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt697542937fbae800/679bec5a21650156da7647e4/11-Form-io-Content-Type.png)
- In the **Content Type Builder** page, add a Custom field in your content type by clicking the **Insert a field** link represented by a **+** sign.
- Under **Select Extension or App**, select **Form.io**, and then click the **Proceed** button.  
  Change the **Display Name** of the custom field to your choice, for example, **Form.io Custom Field**. Optionally, you can add **Help Text** and **Instruction Value** for your custom field. This adds the Form.io app in the custom field.
- After adding the app, click **Save** or **Save and Close** to save your changes.
- To use the Form.io app, create an entry for this newly created content type. To do this, in the left navigation panel, navigate to the **Entries** page, click **+ New Entry** to create a new entry for the above content type, and then click **Proceed**.You will see the Form.io app added as a custom field in your entry page as shown below:![14-Form-io-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc29a769b5877013e/679bec5a61b0cd664512d46a/14-Form-io-Sample-Entry.png)
- In the custom field, select a form from the dropdown you want to display on your website.  
  **Note:** You can select only a single form for each Contentstack entry.
- Click the **Preview** button to view the form. This redirects you to the Form.io dashboard.  
  **Note:** Preview access is available only to users with a Form.io account.
- Click **Save** to save the entry.
- Once you publish the entry, you can see the form on your website.![17-Form-io-Dashboard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d1253b64c97395d/679bec665b90ca25f04e5e4d/17-Form-io-Dashboard.png)

## Common questions

### Do I need to be an Owner/Admin to install the Form.io app?
Yes, you need access to the Contentstack Organization/Stack as the Owner/Admin.

### What credentials are required to configure the Form.io app in Contentstack?
You need the **Form.io Base URL** and **Form.io API Key** retrieved from the Form.io dashboard.

### Can I save only specific Form.io keys in a Contentstack entry?
Yes, under **Choose the Form.io Keys to Save in Entry**, you can select **Custom Fields** and define/select the keys you want to save.

### Can I select multiple forms for a single Contentstack entry?
No, you can select only a single form for each Contentstack entry.