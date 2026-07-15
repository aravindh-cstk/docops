---
title: "[Marketplace guides and apps] - Google Analytics App Installation Guide"
description: Google Analytics App Installation Guide
url: https://www.contentstack.com/docs/marketplace/google-analytics
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: latest
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Google Analytics App Installation Guide

This page explains how to install and configure the Google Analytics app from the Contentstack Marketplace, including prerequisites, setup steps, and how to use the dashboard and sidebar widgets. It is intended for Contentstack Organization/Stack Owners or Admins who need to enable Google Analytics insights for editors within a stack.

## Google Analytics App Installation Guide

Google Analytics is a powerful web analytics tool which helps you gain meaningful insights of your website. Using Contentstack Marketplace you can easily install the Google Analytics app and use it within your stack.

This step-by-step guide explains how to install and configure the Google Analytics app in Contentstack Marketplace. With this, editors can see a graph of the page views for the URL corresponding to the current entry.

**Note**: When you install the Google Analytics app, by default, both the dashboard and sidebar widgets are configured.

## Prerequisites

- [Google Analytics account](https://analytics.google.com/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/ Stack as the Owner/ Admin

## Steps for Execution

- [Fetch View ID, Property ID and Service Account Details](#fetch-view-id-property-id-and-service-account-details)
- [Install and Configure the Google Analytics App](#install-and-configure-the-google-analytics-app)
- [Use the Google Analytics Dashboard Widget](#use-the-google-analytics-dashboard-widget)
- [Use the Google Analytics Sidebar Widget](#use-the-google-analytics-sidebar-widget)

## Fetch View ID, Property ID and Service Account Details

To get your configuration details for Google Analytics, follow the steps given below:

### Creating a Service Account JSON File for Google Analytics Integration

Follow the steps to generate and download a Service Account JSON file for integrating Google Analytics with your project:

**Create a Project**: Go to the [Google Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts) and click **CREATE PROJECT** to create a new project.
![Google-Analytics-Create-Or-Select-Project](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt76fbb7c71e8a688e/65cb73b8f394cc284460445e/Google-Analytics-Create-Or-Select-Project.png)You can also select your existing project by clicking the **SELECT PROJECT** button or the **Select a project** drop-down or directly clicking the project.

- **Generate Service Account Key**: Follow the steps to generate the service account JSON file:
  - Navigate to [Service Accounts](https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts?supportedpurview=project) and select your project.
  - To create a new service account, click the **+ CREATE SERVICE ACCOUNT** button.![Google-Analytics-Create-Service-Account](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad89e466a19f67a0/65cb73b8f43089d57c9bbeee/Google-Analytics-Create-Service-Account.png)
  - Fill out the service account details, click the **CREATE AND CONTINUE** button, and then click **DONE**.![Google-Analytics-Service-Account-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb436365e5d17748/65cb7480fcd8645ef3eec534/Google-Analytics-Service-Account-Details.png)
  - Click the three dots corresponding to the service account details and select the **Manage keys** option.![Google-Analytics-Service-Account-Manage-Keys](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5d15726a57cce63b/65cb74819333f7c26710959a/Google-Analytics-Service-Account-Manage-Keys.png)
  - To add a new key, click the **ADD KEY** drop-down and select the **Create new key** option.![Google-Analytics-Service-Account-Add-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt694385ffc06af5bc/65cb7481faacae43061fc473/Google-Analytics-Service-Account-Add-Key.png)
  - Choose **JSON** as the **Key type** and click **CREATE**.![Google-Analytics-Service-Account-Create-Key](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb7f5d30251c68f2/65cb7480314896bb70d71f9f/Google-Analytics-Service-Account-Create-Key.png)
  - A JSON file gets downloaded automatically. Save it properly to use in [Step 2.](#install-and-configure-the-google-analytics-app)

- **Enable API Access**: Follow the [Create and delete service account keys](https://cloud.google.com/iam/docs/keys-create-delete#get-key) documentation to enable the API access for your project.![Google-Analytics-Enable-API-Access](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7c1cb75062eb664e/65cb7465fcd864d266eec530/Google-Analytics-Enable-API-Access.png)

### Enable Google Analytics Reporting API

To enable the Google Analytics API, follow the steps:

- Go to the [APIs & Service](https://console.cloud.google.com/apis/dashboard) dashboard in the Google Cloud Platform.
- Click the **+ ENABLE APIS AND SERVICES** button on the top header.![Google-Analytics-Enable-APIs-Services](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d2baed432c2bdb0/65cb73b9f430898a769bbef2/Google-Analytics-Enable-APIs-Services.png)
- In the search bar of the **API Library** page, type and select **Google Analytics Reporting API**.
- Click the **ENABLE** button to enable the Google Analytics Reporting API.![Google-Analytics-Reporting-API-Enable-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc205f6fdc2b37e45/664c81161a29a37a4e54b184/Google-Analytics-Reporting-API-Enable-Button.png)
- Go back to the **API Library** page, type and search for **Google Analytics Data API** and select it.
- Click the **ENABLE** button to enable the Google Analytics Data API.![Google-Analytics-Data-API-Enable-Button](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3685284cde63b91d/664c81218a0182ffe214bc36/Google-Analytics-Data-API-Enable-Button.png)

### Add Service Account to Google Analytics

Follow the steps to add a service account to Google Analytics:

- Open the downloaded JSON file and copy the **client_email** value.
- Now, go to your [Google Analytics account](https://analytics.google.com/).
- In the left navigation panel, click **Admin**. Go to the **Account Settings** section and click **Account access management** to add users.![Google-Analytics-Account-Access-Management](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8afe80a4df82ed0e/65cb73b823dbefd4d5ffe956/Google-Analytics-Account-Access-Management.png)
- Click the plus icon on the top-left corner of the screen and select the **Add users** option.![Google-Analytics-Add-Users](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte3bc300e4aded1dc/65cb73b83fe059da90b65fab/Google-Analytics-Add-Users.png)
- In the **Add roles and data restrictions** modal, enter the **client_email** (retrieved from the JSON file) in the **Email addresses** text field, select **Viewer** under the **Direct roles and data restrictions** section, and click the **Add** button to add users to your analytics account.![Google-Analytics-Enter-Client-Email-And-Select-Viewer-Access](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3d6581e492534710/65cb73b9fce01cc4c6fc7fcb/Google-Analytics-Enter-Client-Email-And-Select-Viewer-Access.png)

### Get the Property ID

To get the Property ID for the Google Analytics 4 version, follow the steps:

- Go to your [Google Analytics account](https://analytics.google.com/).
- In the left navigation panel, click **Admin**. Go to the **Property Settings** section and click **Property details** to get the property ID.![Google-Analytics-Property-Details](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt310746ee2873f615/65cb754a7c5d41060e52803e/Google-Analytics-Property-Details.png)
- In the top-right corner, you can view the **PROPERTY ID**. Copy it to the clipboard to use in [Step 2](#install-and-configure-the-google-analytics-app).![Google-Analytics-Property-ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0ddb105ae472ce4e/65cb748100d72e4c0ef52cec/Google-Analytics-Property-ID.png)

### Get the View ID

To get the View ID for the Google Universal Analytics version, follow the steps:

- Go to your [Google Analytics account](https://analytics.google.com/).
- Navigate to the **Admin** page. Under the **View** section, click **View Settings**.![Google-Analytics-Universal-Analytics-View-Settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0569df10fb62906d/65cb765aedad336c75fae95a/Google-Analytics-Universal-Analytics-View-Settings.png)
- In the **View Settings** section, copy the **View ID** to the clipboard to use in [Step 2](#install-and-configure-the-google-analytics-app).![Google-Analytics-Universal-Analytics-View-ID](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt589c786c831ff348/65cb76651a7344df32bc5959/Google-Analytics-Universal-Analytics-View-ID.png)

## Install and Configure the Google Analytics App

Follow the steps below to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the apps available. Hover over the **Google Analytics** app and click **Install**.![Marketplace-google-analytics.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf440199ded722df6/69dc84b97ec14141ddb11fd6/Marketplace-google-analytics.png)
- In the popup window, select the stack where you want to install the Google Analytics app, accept the terms of service and click the **Install** button.![Google-Analytics-App-Install](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf66525267b56d9ec/65cb7358fcd864406eeec521/Google-Analytics-App-Install.png)
- You can choose to use Google Universal Analytics or Google Analytics 4 with the latest Marketplace app version.
- On the **Configuration** screen, choose the Google Analytics solution you prefer:
  - **Universal Analytics**: To access the universal analytics, enter the following details:
    - **View ID**: Enter the **View ID** retrieved in [Step 1](#get-the-view-id).
  - **Google Analytics 4**: Contentstack now supports Google Analytics 4 in the latest app update as an advanced feature. To configure Google Analytics 4 into your stack, enter the following details:
    - **Property** **ID: **Enter the **Property ID **retrieved in [Step 1](#get-the-property-id).
- **Import Service Account Details**: Upload the service account details (`service_account.json` file) retrieved in [Step 1](#fetch-view-id-property-id-and-service-account-details).

  **Note**: The **project_id**, **client_email**, and **private_key** are mandatory fields in JSON file which cannot be edited.
- After adding the configuration details, click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.![Google-Analytics-UI-Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt67e16b1474720dac/65cb73581a7344c8e7bc5944/Google-Analytics-UI-Locations.png)
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

  **Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](../marketplace-platform-guides/installed-apps.md#view-edit-configuration-ui-locations-and-webhook) guide.
- Click the **Open Stack** button to start using the Google Analytics application.

## Use the Google Analytics Dashboard Widget

Go to stack **Dashboard** to view the Google account analytics. By default, it displays the data for 30 days.

- You can select the number of days for which data should be displayed.![Google-Analytics-Dashboard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9bc2133a7e240b8d/65cb73b99778062fb8c04a3d/Google-Analytics-Dashboard.png)

## Use the Google Analytics Sidebar Widget

To use the Google Analytics app within an entry of your stack, follow the steps given below:

Go to your stack, click the **Content Models** icon in the left navigation panel, and click the **+ New Content Type** button.

- Create a content type by adding relevant details as displayed below:![Google-Analytics-Content-Type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8a5ef9e1aa802ce3/65cb73b8f394ccf90360445a/Google-Analytics-Content-Type.png)
- In the **Content Type Builder** page, add a [URL](../create-content-types/url.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.![Google-Analytics-Content-Type-Fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt43e3414b38de82eb/65cb74e0fce01c57ebfc7fd8/Google-Analytics-Content-Type-Fields.png)
- After adding the fields, click **Save** or **Save and Close** to save your changes.
- To use the Google Analytics app in the sidebar widget, create an entry for this content type.
- In the **Title** field, enter a suitable title for your entry. In the **URL** field, enter the URL of the page for which you want to take the Google Analytics data, and then **Save** the entry.![Google-Analytics-Sample-Entry](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt088aba4f236bcb70/65cb74813fe0593993b65fb0/Google-Analytics-Sample-Entry.png)
- In the right navigation panel, click **Widgets** and select the **Google Analytics** app to view the analytics.
![Google-Analytics-Sidebar-Widget-Icon](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta32461eb4f2b0ca3/65cb74817628327cd8c5ea2f/Google-Analytics-Sidebar-Widget-Icon.png)**Note**: This displays the Google Analytics data for the specific page.
- You can select the number of days for which data should be displayed for the specific page.![Google-Analytics-Sidebar-Widget](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt12deaf24a0d702f0/65cb7481f4308960669bbef7/Google-Analytics-Sidebar-Widget.png)

## Common questions

### Do I need to configure both the dashboard and sidebar widgets after installing the app?
**Note**: When you install the Google Analytics app, by default, both the dashboard and sidebar widgets are configured.

### Which Google Analytics versions are supported by the Marketplace app?
You can choose to use Google Universal Analytics or Google Analytics 4 with the latest Marketplace app version.

### What file do I need to upload during configuration?
**Import Service Account Details**: Upload the service account details (`service_account.json` file) retrieved in [Step 1](#fetch-view-id-property-id-and-service-account-details).

### What field is required to use the sidebar widget for page-specific analytics?
In the **Content Type Builder** page, add a [URL](../create-content-types/url.md) field in your content type by clicking the **Insert a field** link represented by a **+** sign.