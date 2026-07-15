---
title: "[Developer Hub guides] - Creating an App in Developer Hub"
description: Steps to create Standard or Machine to Machine apps in Contentstack Developer Hub.
url: https://www.contentstack.com/docs/developer-hub/creating-an-app-in-developer-hub
product: Contentstack
doc_type: guide
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Developer Hub guides] - Creating an App in Developer Hub

This page explains how to create a new app in Contentstack Developer Hub, including the differences and steps for Standard and Machine to Machine categories. It is intended for developers and organization admins/owners who need to set up apps for UI locations, webhooks, OAuth integrations, or machine-to-machine API access.

## Creating an App in Developer Hub

To create a new app, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and follow the steps below:
- On the left navigation panel, click the **Developer Hub** icon.![Developer_Hub_icon.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbd87a76fbd5f1a4b/66e3cc3fbc8b1c4a3a3aab63/Developer_Hub_icon.png)
- Click the **+ New App **button.
- In the **Create New App** modal, select the category of app you want to create, i.e., **Standard **or **Machine to Machine**.**Standard: **You can create a versatile app with UI Locations, Webhooks, OAuth 2.0 Integrations, and App Hosting capabilities.
- **Machine to Machine: **You can create an OAuth-only app for seamless machine-to-machine interactions with Contentstack’s API.

Only organization Admin(s) or the owner have the option to create both Standard and Machine-to-Machine applications. Other users can only create Standard applications. For more information about the different application categories, please refer to the "[Introduction to Contentstack Applications.](./introduction-to-contentstack-applications.md)"

## Standard Category

- You can create both Organization and Stack apps within the Standard category. Please note that only organization admin(s)/owner can create organization apps.
- In the** Create New App** modal, add the following details to create an app under the Standard Category:

**App Type (required):** Select the type of app you want to create: Organization or Stack. Read more about [Types of App](./types-of-apps.md).
- **Name (required):** Enter a suitable name for your app (for example, Sample App).
- **Description (optional):** Enter a description for your app.![Create_Standard_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0b26142e1ad9e51a/66e3cc3ebc8b1c457e3aab5f/Create_Standard_App.png)
- Click the **Create **button.
- Once you create the app, you will be navigated to the Basic Information page, where you will find the details of the apps.
- On the left navigation panel, you will find [OAuth](./contentstack-oauth.md), [UI Locations](../developer-hub.md#managing-ui-locations), [Webhooks](./managing-webhooks-in-an-app.md), [Hosting](./app-hosting.md), App [Manifest](./app-manifest.md), and [Version Log](./app-versioning.md) options.By using the **App Manifest **and **Version **options, you can view the current and previous versions of the app, whereas the remaining options let you configure or define the app.![Standard_App_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte009e563bf1ca422/66e3cc3ec91aebc9c86104c5/Standard_App_Page.png)
- 

  **Note: **Once the app is created, you can manage and update it. Refer to the “More Articles” section to know more about it.

## Machine to Machine Category

- You can create Organization apps within the Machine to Machine category.
- Let’s see how to create a Machine to Machine Organization app.

**Name (required): **Enter a suitable name for your app (for example, Sample App).
- **Description (optional): **Enter a description for your app.![Create_M2M_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c2bf206baef6612/66e3cc3e07e58b072c800525/Create_M2M_App.png)
- Click the **Create **button.
- Once you create the app, you will be navigated to the **Basic Information **page, where you will find the details of the app.
- In the left navigation panel, you will find the OAuth tab, which allows you to further configure the **OAuth **settings for your app.![M2M_App_Page.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16afb3986ff49fe3/66e3cc3f4623eb04bd2b3bfd/M2M_App_Page.png)

## Common questions

### Who can create Standard and Machine-to-Machine applications?
Only organization Admin(s) or the owner have the option to create both Standard and Machine-to-Machine applications. Other users can only create Standard applications.

### What is the difference between Standard and Machine to Machine apps?
**Standard: **You can create a versatile app with UI Locations, Webhooks, OAuth 2.0 Integrations, and App Hosting capabilities.  
**Machine to Machine: **You can create an OAuth-only app for seamless machine-to-machine interactions with Contentstack’s API.

### Where do I configure OAuth, UI Locations, Webhooks, Hosting, Manifest, and Version Log after creating an app?
On the left navigation panel, you will find [OAuth](./contentstack-oauth.md), [UI Locations](../developer-hub.md#managing-ui-locations), [Webhooks](./managing-webhooks-in-an-app.md), [Hosting](./app-hosting.md), App [Manifest](./app-manifest.md), and [Version Log](./app-versioning.md) options.

### Where can I read more about application categories?
For more information about the different application categories, please refer to the "[Introduction to Contentstack Applications.](./introduction-to-contentstack-applications.md)"

<!-- filename: developer-hub-guides-creating-an-app-in-developer-hub.md -->