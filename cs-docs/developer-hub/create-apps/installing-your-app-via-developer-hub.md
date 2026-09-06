---
title: "Installing your App via Developer Hub"
description: "Installing Your App via Developer Hub"
url: /developer-hub/installing-your-app-via-developer-hub
uid: blt9293d3f018591111
---

# Installing your App via Developer Hub

## Installing your App via Developer Hub

Once your app is ready, you can test the app by installing it in your preferred stack.

## Prerequisites

-   An app created in Developer Hub
-   Stack [Admin](/docs/headless-cms/types-of-roles#admin) or [Owner](/docs/headless-cms/types-of-roles#owner) permissions, or Organization [Admin](/docs/administration/about-administration-roles) permissions

    **Note**

    -   Stack Admins can install any app in the stacks they own.
    -   Organization Admins can install the app in any stack that they are a member of.


## What You Will Learn

-   How to install a stack app.

-   How to install (authorize) an organization app.

-   Where to find installed apps to update or uninstall them.


## Install an app

1.  Click the app card to go to the app’s **Basic information** page.
2.  Click the **Install App** button on the top-right side. Another quick step is to open this URL in a browser:  
    https://app.contentstack.com/!#/apps/{appUID}/install.  
    ![Basic_Information.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd21ef2cb3254df88/678517ad7dbc19079cf9f128/Basic_Information.png)
3.  In the case of a stack app, you are prompted to select the stack within which you want to install the app. Select the stack and click **Install**.  
    ![Install_App](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0ae4fb1175f9c22/64b60843bbf1d065769db7b9/Install_App.png)

    **Note:** If you are not a stack admin or owner, you will see a **Request Install** button instead. Clicking this button will send a request to the stack admin to install this app for you.

4.  You will be redirected to the configuration page to fill in the required information related to the App to complete the installation (as seen in the [Configuring an App](/docs/developer-hub/configuring-an-app) section). After adding the details, click the **Save** button.
5.  In the case of an organization app, you will be asked to allow access to specific modules of your Contentstack account. Click **Authorize & Install** to proceed.

Once you install an app, you can find the app in **Marketplace** > **Manage** > **Installed Apps**. You can hover on the app and update the app configuration, and uninstall it.

**Note:** An app can only be installed once per stack. To reinstall an app, you need to uninstall it from the stack first, and then reinstall it.
