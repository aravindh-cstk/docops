---
title: "App Config Location"
description: "Manage app settings in the App Configuration Location for easy, secure access across all installations."
url: /developer-hub/app-config-location
---

# App Config Location

## App Config Location

The App Config UI Location allows you to manage all the settings for your app centrally. You need to configure it once and all the other locations (where the app is installed) can access these configurations.

The app configuration page is a separate entity that allows you to configure your application.  
Setting up an app configuration page allows you to store all the config settings for your application and secure their access from a single location.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   An app created in Developer Hub
-   A hosted app URL (Launch or custom hosting)

## What You Will Learn

-   The difference between the App Config and Server Config configuration types.
    
-   Best practices for building an app config page.
    
-   How to add an App Config location to your app through the Developer Hub console.
    

## Types of configurations

There are two types of configurations that Contentstack supports:

1.  **App Config:**  
    The app config type of configuration is a public configuration that you can share with all locations. You can view these configurations in your API response.
    
    **Note:** It is recommended not to store any sensitive data in the app config as anyone can access it via the APIs.
    
2.  **Server Config:**  
    The server config contains sensitive configurations of your app. It is directly shared with the backend server.
    
    Suppose you register a webhook to capture app installation update events. After the installation is updated, the information is directly sent to the backend apps via the [webhook](/docs/developer-hub/managing-webhooks-in-an-app/).
    
    **Note:** It is recommended to use server config for configurations that should be kept private and can be accessed only by the admins.
    

## Best Practices for Building an App Config Page

Your app config page should be straightforward, giving the users a clear idea of the details they need to provide to set up an application. It would be best if you have a simple interface so users can easily interact with your app.

Your app should allow users to manage all the other UI locations from your app. You should capture sensitive information using the server configuration type. Capture non-sensitive details using the app configuration type.

**Note:** The UI need not show the difference between server and app configurations.

## Create an App Config Page

Let's see how to add app config location to your app:

-   **Via the Developer Hub Console:**  
    To add the app config location to your app via the Developer Hub console, login to your [Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:
    
    1.  Navigate to **App Switcher** on the top-right corner and select **Developer Hub**.
    2.  Select the application for which you want to set up the configuration page.
    3.  Click the **UI Locations** tab. To set the **App URL**, click the **View Hosting** link. You will be redirected to the **Hosting** tab.  
        ![View_Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf879b2d8d0af9821/68343990c589ead0184bdd34/View_Hosting.png)
    4.  In the **Hosting** tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or[Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application. Click the **Save** button to save your hosting configuration.  
        ![App_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt37093a3aeb3377a9/68343990d6011e50b9ed53c9/App_URL.png)
    5.  Navigate to the **UI Locations** tab to configure the App Config UI location.
    6.  Hover over the **App Configuration** location, and click the **\+ Add UI Location** button.  
        ![Add_App_Config_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7acdbaa7d6872ded/683439903291d22df86485d0/Add_App_Config_Location.png)
    7.  On the resulting **Configuration** page, set up the configurations for your application by providing details such as **Path**, and **Description**. You can also enable the configuration using the **Enabled** toggle button.
        
        Properties that can be specified for this UI location:
        
        -   **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app/).
        -   **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
        -   **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.
        
        You can configure any UI location as **mandatory** using the **Required** toggle. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.
        
        **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.
        
        ![App_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta4a6392be4f17457/68343990cf52ee31ccaed0a2/App_Configuration.png)
    8.  Finally, click the **Save** button to save the configuration details.
        
        You will see the details of the configured UI location on the **UI Locations** tab in the **App Configuration** screen after installing the app.
        
        You can enable or disable the non-required UI locations.
        
        Apps which have the App Config location configured will be visible in the configuration screen.
        
        ![App_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf072c893d5b40b29/65b68b97fd23e559e67d971a/App_Configuration.png)

**Note:** Each app can have only **one** app config location.

You can create custom app config locations by writing your custom code, or you can use the prebuilt [boilerplate](/docs/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.
