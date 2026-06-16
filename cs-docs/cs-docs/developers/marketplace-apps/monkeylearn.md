---
title: "[Marketplace guides and apps] - MonkeyLearn App Installation Guide"
description: MonkeyLearn App Installation Guide for installing and configuring the MonkeyLearn app within Contentstack Marketplace.
url: https://www.contentstack.com/docs/developers/marketplace-apps/monkeylearn
product: Contentstack
doc_type: marketplace-app-guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - MonkeyLearn App Installation Guide

This page explains how to install and configure the MonkeyLearn app from the Contentstack Marketplace and how to use it within a stack. It is intended for Contentstack Owners/Admins and developers who manage Marketplace apps and want to run MonkeyLearn text analysis on Contentstack entries.

## MonkeyLearn App Installation Guide

MonkeyLearn is a machine learning-based text analytics platform that offers detailed insights about your content, such as feedback, surveys, charts, etc. It helps to analyze customer sentiments by collecting data in one place and sorting their response in a simple, clean, and structured manner.

The MonkeyLearn app offers detailed insights into the performance of your content, such as feedback, surveys, charts, etc. By analyzing customer experience, you can improve the overall performance of your website.

## Prerequisites
- [MonkeyLearn account](https://app.monkeylearn.com/studio/)
- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin.

Let's go through the steps required to install and configure the MonkeyLearn app within Contentstack Marketplace.

## Steps for Execution
- [Fetch the credentials from your MonkeyLearn account](#fetch-the-credentials-from-your-monkeylearn-account)
- [Install the MonkeyLearn Application](#install-the-monkeylearn-application)
- [Use MonkeyLearn within your Stack](#use-monkeylearn-within-your-stack)

## Fetch the credentials from your MonkeyLearn account

To configure the application, you need to create a MonkeyLearn account. To do so, follow the below steps:

Navigate to [MonkeyLearn](https://app.monkeylearn.com/accounts/login/?next=/studio/templates) to create an account.
- Under the “User Profile” section, click** My Account**.
- Under **API Key**, you will see the** API Key. **Click** Revoke and re-generate **to create a new one.

**Note:** In the [Plan and Pricing](https://monkeylearn.com/pricing/)section, you can check for the plans based on your requirement.

To use the MonkeyLearn app, you can either use a pre-defined model or can create a custom model from your MonkeyLearn account. To create a Classifier custom model, refer to [How to build a Custom Classifier](https://help.monkeylearn.com/en/articles/2173823-how-to-build-a-custom-classifier) document.

**Additional Resource:** To create an Extractor custom model, refer to the [How to build a Custom Extractor](https://help.monkeylearn.com/en/articles/2174073-how-to-build-a-custom-extractor) document.

## Install the MonkeyLearn Application

Follow the steps to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).
- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps **from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **MonkeyLearn **app and click **Install App.******
- In the popup window, select the stack where you want to install the MonkeyLearn app, accept the terms of service, and click the **Install** button.
- On the **Configuration** page, enter the **API Key** you retrieved from MonkeyLearn in [step 1](#fetch-the-credentials-from-your-monkeylearn-account).
- Select **Scope**. Select the scope for which the MonkeyLearn app will be available for running the analysis on the Contentstack content types.
  - **All Content Types: **The scope of the app is defined for all the content types in the selected stack.
  - **Specific Content Type:** The scope of the app is defined for specific content type (types) in the selected stack.
- Click the **Save** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.
- If the webhook is enabled for your app, you can view the webhook logs under the **Webhook** tab.

**Additional Resource**: For more information on UI location and webhooks, please refer to the [Installed Apps](/docs/developers/marketplace-platform-guides/installed-apps#view-edit-configuration-ui-locations-and-webhook) guide.
- Click **Open Stack** to start using the MonkeyLearn application.

## Use MonkeyLearn within your Stack

To use the MonkeyLearn application in an entry of your stack, you can use text-based fields such as `Single Line Textbox`, `Multi Line Textbox`, `JSON RTE Field`, `Number and Date fields`, `Global Fields`, `Reference Fields` etc.

**Note:** You can only use **text-based** **fields** of a content type while using the MonkeyLearn app.

To use the MonkeyLearn application, follow the steps given below:

Go to your stack, click the Content Models icon on the left navigation panel, and click the **+ New Content Type** button.
- Create a content type by adding relevant details and click **Save and proceed**.
- In the Content Type Builder page, add text fields such as the Multi Line Textbox field and JSON RTE field in your content type by clicking the **Insert a field** link represented by a + sign.
- Click **Save** or **Save and Close**.
- On the left navigation panel, navigate to the **Entries** page and click** + New Entry** to create a new entry for the above content type. Click **Proceed**.
- Enter the text in the selected fields. Click **Save**.
- On the right navigation panel, select **Widgets**.
- ********Within **Widgets**, click the Entry Widgets dropdown, and under **Apps**, select the app that you configured in the sidebar widget configuration page.
- Select the **Model** from the dropdown.**Note:** The list of models is fetched from your MonkeyLearn account you selected previously.
- Select the** Entry Field** in which you want to perform the text analysis.
- Click **Run** to process the text. The results are displayed in the sidebar widget.**Note:** The results are based on the corresponding model you selected.

## Common questions

### What do I need before installing the MonkeyLearn app?
You need a MonkeyLearn account, a Contentstack account, and access to the Contentstack Organization/Stack as the Owner/Admin.

### Where do I get the API Key required for configuration?
Under the “User Profile” section, click** My Account**, then under **API Key**, you will see the** API Key. **Click** Revoke and re-generate **to create a new one.

### Can I limit the app to specific content types?
Yes. Under **Scope**, you can choose **All Content Types: ** or **Specific Content Type:**.

### What fields can I analyze using MonkeyLearn in Contentstack?
You can use text-based fields such as `Single Line Textbox`, `Multi Line Textbox`, `JSON RTE Field`, `Number and Date fields`, `Global Fields`, `Reference Fields` etc., and **Note:** You can only use **text-based** **fields** of a content type while using the MonkeyLearn app.

<!-- filename: marketplace-guides-and-apps-monkeylearn-app-installation-guide.md -->