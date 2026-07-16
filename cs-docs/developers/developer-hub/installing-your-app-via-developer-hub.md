---
title: "[Developer Hub guides] - Installing your App via Developer Hub"
description: Instructions for installing your app via Developer Hub in a stack or organization, including authorization and configuration steps.
url: https://www.contentstack.com/docs/developer-hub/installing-your-app-via-developer-hub
product: Contentstack
doc_type: guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Developer Hub guides] - Installing your App via Developer Hub

This page explains how to install a Contentstack app from Developer Hub into a stack or organization for testing and use. It is intended for developers and admins who need to install, authorize, and configure an app after it is ready.

## Installing your App via Developer Hub

Once your app is ready, you can test the app by installing it in your preferred stack.

**Note**: Stack admins can install any app in the stacks they own. Organization admins can install the app in any stack that they are a member of.
- Click the app card to go to the app’s **Basic information** page.
- Click the **Install App** button on the top-right side. Another quick step is to open this URL in a browser:
`https://app.contentstack.com/!#/apps/{appUID}/install`.![Basic_Information.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd21ef2cb3254df88/678517ad7dbc19079cf9f128/Basic_Information.png)
- In the case of a stack app, you are prompted to select the stack within which you want to install the app. Select the stack and click **Install**.

    **Note**: If you are not a stack admin or owner, you will see a **Request Install** button instead. Clicking this button will send a request to the stack admin to install this app for you.
- You will be redirected to the configuration page to fill in the required information related to the App to complete the installation (as seen in the [Configuring an App](./configuring-an-app.md) section). After adding the details, click the **Save** button.
- In the case of an organization app, you will be asked to allow access to specific modules of your Contentstack account. Click **Authorize & Install** to proceed.

Once you install an app, you can find the app in **Marketplace** > **Manage** > **Installed Apps**. You can hover on the app and update the app configuration, and uninstall it.

**Note**: An app can only be installed once per stack. To reinstall an app, you need to uninstall it from the stack first, and then reinstall it.

## Common questions

### Who can install an app from Developer Hub?
Stack admins can install any app in the stacks they own, and organization admins can install the app in any stack that they are a member of.

### What if I am not a stack admin or owner?
You will see a **Request Install** button, and clicking it will send a request to the stack admin to install the app for you.

### Where do I find an installed app after installation?
You can find the app in **Marketplace** > **Manage** > **Installed Apps**.

### Can I install the same app multiple times in the same stack?
No. An app can only be installed once per stack; to reinstall it, you must uninstall it first and then reinstall it.