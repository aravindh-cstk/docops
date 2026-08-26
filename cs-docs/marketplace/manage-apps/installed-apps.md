---
title: "Installed Apps"
description: "Learn how to view and manage installed apps from the Contentstack Marketplace, configure settings, and control app access across environments."
url: /marketplace/installed-apps
uid: blt94762165a6a8e282
---

# Installed Apps

## Installed Apps

This section houses all the apps installed for your organization or the stacks within. You can view installed apps, their UI Locations, and webhooks. You can modify configurations and uninstall apps from this interface.

## Access Level to Installed Apps

You can see all or some of the installed apps based on the permissions that you have at the stack and organization level.

-   If you are **an org****anization admin or owner**, you can see all the stack and organization apps installed by any user in your organization.
-   If you are **a st****ack admin or owner**, you can see the apps installed for the stacks that you have access to.
-   If you are **not a stack admin or owner**, you can see the apps installed for the stacks that you have access to.

## View/Edit Configuration, UI Locations, and Webhook

To view or edit the configuration, UI locations, and webhook for any of the installed apps, perform the following steps:

1.  Go to **Manage** > **Installed Apps** in the Marketplace section. Click the app that you want to change the configuration for. You can see the app information page.

**Note:** You can also go to this page from **Discover** > **Apps**.

3.  Go to the **Installed On** tab. You can see a list of stacks where the app is installed. Hover over the stack from which you want to uninstall the app or update the configuration settings. You can see **Uninstall App** and **Configuration** icons.  
    ![Installed-On-Screen](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b41da45afefc430/659fc7eb96b1f69b0ffe8459/Installed-On-Screen.png)
4.  Click the **Configuration** tab to enter the configuration details of the app.  
    ![Configuration-Page](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7a005d695ff36787/659fc80869ba2851d18ef520/Configuration-Page.png)
5.  Click the **UI Locations** tab to access the app's locations.  
    ![UI_Locations](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt471f67d868d07d9a/659fc89651c757367452d6ec/UI_Locations.png) You can see the number of locations in the box corresponding to each UI Location.  
    ![UI_Locations-Box](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0773e8fb5cd19823/659fc89641ec480355b7b9d4/UI_Locations-Box.png) Click the icon (highlighted in the following screenshot) to view the UI Locations in detail.  
    ![UI_Locations-Open-Detailed-Tab](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt979edf36b24eb5ee/659fc897ecc34e9acc10ba9f/UI_Locations-Open-Detailed-Tab.png) You can enable or disable a particular UI location by using the toggle button.  
    ![UI_Locations-Enable-Disable](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt585f20cee32e8034/65a13f17d6cafbb61cf75526/UI_Locations-Enable-Disable.png)

    **Note:** The UI locations marked as **Required** cannot be disabled.

6.  If webhooks are enabled for the app, you can see a **Webhook** tab. The Webhook section provides a list of all configured events under the **Webhook Logs** section.  
    ![Webhook](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc104559b93350f3b/659fc7fbecc34efeae10ba99/Webhook.png) If the app supports webhooks for all branches, and the branch feature is enabled for your organization, you can configure the webhook to send notifications only from a selected set of branches.  
    Inside the **Configure Webhook** section, you can select the following options under **Branch Scope**:

    1.  **All Branches**: if you want the webhook to trigger on all branches of the organization.
    2.  **Specific Branches**: if you want the webhook to trigger on a specific branch(s). You can add multiple branches.

    ![Webhooks-Branch-Support](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb0e510ae1094eb2d/659fc89743e8cb0689a4b5a6/Webhooks-Branch-Support.png)
