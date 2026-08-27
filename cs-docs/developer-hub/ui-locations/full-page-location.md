---
title: "Full Page Location"
description: "Learn how to easily add the Full Page location for your app via the Developer Hub Console."
url: /developer-hub/full-page-location
uid: blte3358a4a8a3f3653
---

# Full Page Location

## Full Page Location

The Full Page UI location is amongst the most versatile UI locations available in Developer Hub, as it allows you to create custom apps that function as separate, independent pages or modules (unlike other UI locations that are restricted to and are part of other modules). This powerful element provides you with a blank canvas, to create, customize and optimize your users stack experience. Examples of this location in action can be viewed through Contentstacks Workflow Board or Calendar apps.

Once you install an app that utilizes a Full Page location, you will see it appear on the main left navigation bar within your stack.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   An app created in Developer Hub
-   A hosted app URL (Launch or custom hosting)

## What You Will Learn

-   How to add a Full Page location to your app through the Developer Hub console.

-   Which properties you can configure for the location.

-   Where the location appears in the stack's left navigation after installation.


## Add a Full Page Location to your App

Here’s how you can add the Full Page location to your app:

**Via the Developer Hub Console:**To add the Full Page location to your app via the Developer Hub console, log in to your [Contentstack account](https://www.contentstack.com/login/) and follow the steps given below:

1.  Navigate to **App Switcher** on the top-right corner and select **Developer Hub**.
2.  Select an application for which you want to add the Full Page location.
3.  Click the **UI Locations** tab. To set the App URL, click the **View Hosting** link. You will be redirected to the **Hosting** tab.  
    ![View_Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf879b2d8d0af9821/68343990c589ead0184bdd34/View_Hosting.png)
4.  In the **Hosting** tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application. Click the **Save** button to save your hosting configuration.  
    ![App_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt37093a3aeb3377a9/68343990d6011e50b9ed53c9/App_URL.png)
5.  Navigate to the **UI Locations** tab to configure the Full Page UI location.
6.  Hover over the **Full Page** location, and click the **\+ Add** **UI Location** button.  
    ![Add_Full_Page_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf4c674536b6e944/683571cc1a39315dc053d042/Add_Full_Page_Location.png)
7.  On the resulting **Configuration** page, set up the configurations for Full Page location by providing details such as **Name**, **Path**, **Location Icon**, and **Description**. You can also enable the location by default using the **Enabled** toggle button.

    Properties that can be specified for this UI location:

    -   **Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
    -   **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app/).
    -   **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
    -   **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

    You can mark any UI location as **mandatory** using the **Required** toggle. If the toggle is enabled, the location becomes mandatory to your app users and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.

    **Note:** The location icon file size must be less than **1 MB** and must be in **.svg** format.

    **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.

    ![Full_Page_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbda85a5b08a0e0bd/683571cc11e9dd7c637c4650/Full_Page_Location.png)
8.  Finally, click the **Save** button to save the Full Page location’s configuration details.

    You will see the details of the configured UI location on the **UI Locations** tab in the **App Configuration** screen after installing the app and will have the option to enable or disable the non-required UI locations.

    Apps which have the Full Page Modifier location configured will be visible in the Full Page UI location.

    Navigate to the [stack](/docs/headless-cms/about-stack). In the left navigation, you will see the installed app in the Full Page UI location.

    For example, the [Healthcheck app](/marketplace/healthcheck) can be viewed in the Full Page location


**Note:** Contentstack Marketplace currently offers the **Healthcheck** app which can be viewed on the Full Page location. For more information, refer to the [Healthcheck App Installation Guide](/docs/marketplace/healthcheck#overview).
