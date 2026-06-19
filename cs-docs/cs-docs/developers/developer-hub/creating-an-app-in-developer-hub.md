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
- On the left navigation panel, click the **Developer Hub** icon.
- Click the **+ New App **button.
- In the **Create New App** modal, select the category of app you want to create, i.e., **Standard **or **Machine to Machine**.**Standard: **You can create a versatile app with UI Locations, Webhooks, OAuth 2.0 Integrations, and App Hosting capabilities.
- **Machine to Machine: **You can create an OAuth-only app for seamless machine-to-machine interactions with Contentstack’s API.

Only organization Admin(s) or the owner have the option to create both Standard and Machine-to-Machine applications. Other users can only create Standard applications. For more information about the different application categories, please refer to the "[Introduction to Contentstack Applications.](/docs/developer-hub/introduction-to-contentstack-applications)"

## Standard Category

- You can create both Organization and Stack apps within the Standard category. Please note that only organization admin(s)/owner can create organization apps.
- In the** Create New App** modal, add the following details to create an app under the Standard Category:

**App Type (required):** Select the type of app you want to create: Organization or Stack. Read more about [Types of App](/docs/developer-hub/types-of-apps/).
- **Name (required):** Enter a suitable name for your app (for example, Sample App).
- **Description (optional):** Enter a description for your app.
- Click the **Create **button.
- Once you create the app, you will be navigated to the Basic Information page, where you will find the details of the apps.
- On the left navigation panel, you will find [OAuth](/docs/developer-hub/contentstack-oauth), [UI Locations](/docs/developer-hub#managing-ui-locations), [Webhooks](/docs/developer-hub/managing-webhooks-in-an-app), [Hosting](/docs/developer-hub/app-hosting), App [Manifest](/docs/developer-hub/app-manifest), and [Version Log](/docs/developer-hub/app-versioning/) options.By using the **App Manifest **and **Version **options, you can view the current and previous versions of the app, whereas the remaining options let you configure or define the app.
- **Note: **Once the app is created, you can manage and update it. Refer to the “More Articles” section to know more about it.

## Machine to Machine Category

- You can create Organization apps within the Machine to Machine category.
- Let’s see how to create a Machine to Machine Organization app.

**Name (required): **Enter a suitable name for your app (for example, Sample App).
- **Description (optional): **Enter a description for your app.
- Click the **Create **button.
- Once you create the app, you will be navigated to the **Basic Information **page, where you will find the details of the app.
- In the left navigation panel, you will find the OAuth tab, which allows you to further configure the **OAuth **settings for your app.

## Common questions

### Who can create Standard and Machine-to-Machine applications?
Only organization Admin(s) or the owner have the option to create both Standard and Machine-to-Machine applications. Other users can only create Standard applications.

### What is the difference between Standard and Machine to Machine apps?
**Standard: **You can create a versatile app with UI Locations, Webhooks, OAuth 2.0 Integrations, and App Hosting capabilities.  
**Machine to Machine: **You can create an OAuth-only app for seamless machine-to-machine interactions with Contentstack’s API.

### Where do I configure OAuth, UI Locations, Webhooks, Hosting, Manifest, and Version Log after creating an app?
On the left navigation panel, you will find [OAuth](/docs/developer-hub/contentstack-oauth), [UI Locations](/docs/developer-hub#managing-ui-locations), [Webhooks](/docs/developer-hub/managing-webhooks-in-an-app), [Hosting](/docs/developer-hub/app-hosting), App [Manifest](/docs/developer-hub/app-manifest), and [Version Log](/docs/developer-hub/app-versioning/) options.

### Where can I read more about application categories?
For more information about the different application categories, please refer to the "[Introduction to Contentstack Applications.](/docs/developer-hub/introduction-to-contentstack-applications)"

<!-- filename: developer-hub-guides-creating-an-app-in-developer-hub.md -->