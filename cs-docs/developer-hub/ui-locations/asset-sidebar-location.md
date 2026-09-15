---
title: "Asset Sidebar Location"
description: "Manage and optimize your assets in the Asset Sidebar Location to enhance their functionality for your needs."
url: /developer-hub/asset-sidebar-location
uid: blte2f8fc3bd7ffc196
---

# Asset Sidebar Location

## Asset Sidebar Location

The Asset Sidebar Location lets you create customized sidebar widgets that extend the functionality of your [assets](/docs/headless-cms/about-assets) and enhance their editorial experience to suit your needs.  
You can efficiently manage, transform, and optimize the assets in your [stack](/docs/headless-cms/about-stack).

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   An app created in Developer Hub
-   A hosted app URL (Launch or custom hosting)

## What You Will Learn

-   How to add an Asset Sidebar location to your app through the Developer Hub console.

-   Which properties you can configure for the location.

-   Where the location appears in the Assets section after installation.


## Add an Asset Sidebar Location to your App

Let's see how to add asset sidebar location to your app:

-   **Via the Developer Hub Console:**  
    To add the asset sidebar location to your app via the Developer Hub console, login to your [Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:

    1.  Navigate to **App Switcher** on the top-right corner and select **Developer Hub**.
    2.  Select an application for which you want to add the asset sidebar location.
    3.  Click the **UI Locations** tab. To set the **App URL**, click the **View Hosting** link. You will be redirected to the **Hosting** tab.  
        ![View_Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4502661279fd5aa6/68303235980bb6ba0872715f/View_Hosting.png)
    4.  In the Hosting tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application. Click the **Save** button to save your hosting configuration.  
        ![App_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0ab1619e05e9133/68303234bcb194e9539ac1d6/App_URL.png)
    5.  Navigate to the **UI Locations** tab to configure the Asset Sidebar Modifier UI location.
    6.  Hover over the **Asset Sidebar** location, and click the **\+ Add** **UI Location** button.  
        ![Add_Asset_Sidebar_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt04c721fe28ecc758/683571082e344b0ced49e7f7/Add_Asset_Sidebar_Location.png)
    7.  On the resulting **Configuration** page, set up the configurations for asset sidebar location by providing details such as **Name**, **Path**, **Width**, **Blur**, and **Description**. You can also enable the configuration using the **Enabled** toggle button.

        Properties that can be specified for this UI location:

        -   **Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
        -   **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app/).
        -   **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
        -   **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.

        You can configure any UI location as **mandatory** using the **Required** toggle. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.

        **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.

        ![Asset_Sidebar_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88224a9e2e66f62f/683571081a3931529d53d036/Asset_Sidebar_Configuration.png)
    8.  Finally, click the **Save** button to save the asset sidebar location’s configuration details.

        You will see the details of the configured UI location on the **UI Locations** tab in the **App Configuration** screen after installing the app.

        You can enable or disable the non-required UI locations.

        Apps which have the Asset Sidebar location configured will be visible in the [**Assets**](/docs/headless-cms/about-entries#create-and-manage-assets) section.

        Navigate to a particular asset and in the right navigation panel, click **Widgets**.

        For example, the app can be viewed in the Asset Sidebar location as shown below:

        ![App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5998a7a7f8dc45e8/65b6821afd23e57b087d970c/App.png)

**Note:** A single app supports up to **three** asset sidebar locations.

You can create new asset sidebar locations by writing your custom code, or you can use the prebuilt [boilerplate](/docs/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.
