---
title: "[Developer Hub guides] - Updating an App in Developer Hub"
description: After creating an app, you can update its basic information, OAuth scopes, App URL, and webhook details in Developer Hub.
url: https://www.contentstack.com/docs/developers/developer-hub/updating-an-app-in-developer-hub
product: Developer Hub
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Developer Hub guides] - Updating an App in Developer Hub

This page explains how to update an existing app in Developer Hub, including basic information, OAuth scopes, UI locations (App URL and locations), and webhook configuration. It is intended for developers who have already created an app and need to modify its settings after creation.

## Updating an App in Developer Hub

After creating an app, you can update its basic information, OAuth scopes, App URL, and webhook details. You can even enable or disable them.  
Let’s look at them in detail.

**Note:** You can update your existing app installations from [Marketplace](/docs/developers/marketplace-platform-guides/about-marketplace/). Navigate to Marketplace -> Manage -> Installed Apps. Click **Update **to install an updated version of your app.

## Basic Information

To update the basic information of an app, perform the steps given below:
- Click the app that you want to update.
- In the **Basic Information** page, you will find the **Name** and **Description** of the app under the **Editable Information** section.
- Make the required changes as per your need, and click the **Save **button.

These are the updates that you can perform in your Basic Information section.

## OAuth

You can update the scopes of your App Token or your User Token in the OAuth section. To do so, perform the steps given below:
- Click the app that you want to update.
- In the **OAuth** page, you can update the scopes of either the **App Token** or the **User Token**.
- **App Token**: You need to use the app token while creating an app that performs static functions and requires certain permissions to manage its own state.
- **User Token**: A developer must acquire a user token in order to perform actions on behalf of a user. The app issues a user token when the user authenticates, and the token enables it to act on the user's behalf.
- Once the scopes are updated, click **Save**.

These are the updates that you can perform in your OAuth section.

## UI Locations

You can update the App URL i.e., the address of the app where it is hosted and the App Locations. To do so, perform the steps given below:
- Click the app that you want to update.
- In the **UI Locations** page, you can update the **App URL**.
- You can edit the **Enabled location(s)** or add **Available location(s)** under **App Location(s)**, if needed.
- Once the locations are updated, click the **Save **button.

These are the updates that you can perform in your UI Locations section.

## Webhooks

If you have enabled webhooks, you can update webhook configuration details. To do so, perform the steps given below:
- Click the app that you want to update.
- In the **Webhooks** page, you can update the **URL to Notify**, **HTTP Basic Auth** details, **Custom Headers**, the **App Events**, the **Stack Events, **and the** User(s) to Notify** section.
- Once the details are updated, click the **Save** button.

These are the updates that you can perform in your webhooks section.

## Common questions

### Can I update an app after it has already been created?
Yes. After creating an app, you can update its basic information, OAuth scopes, App URL, and webhook details.

### Where do I update OAuth scopes for my app?
In the **OAuth** page, you can update the scopes of either the **App Token** or the **User Token**.

### What can I change under UI Locations?
You can update the **App URL** and edit **Enabled location(s)** or add **Available location(s)** under **App Location(s)**.

### How do I update existing app installations?
You can update your existing app installations from [Marketplace](/docs/developers/marketplace-platform-guides/about-marketplace/). Navigate to Marketplace -> Manage -> Installed Apps. Click **Update **to install an updated version of your app.