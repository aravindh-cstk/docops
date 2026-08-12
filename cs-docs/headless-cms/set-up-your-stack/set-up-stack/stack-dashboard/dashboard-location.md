---
title: "Stack Dashboard Location"
description: "Use the Dashboard Location to create widgets for real-time stack usage, published entries, and daily to-dos."
url: /developer-hub/dashboard-location
---

# Stack Dashboard Location

## Stack Dashboard Location

The Dashboard Location is a type of location that lets you create widgets for your [stack dashboard](/docs/headless-cms/about-stack-dashboard).  
Using this location, you can create several useful widgets.  
Consider a widget that does the following operations:

-   Shows real-time data of stack usage
-   Lists all the entries published recently
-   Allows you to add your "To-Dos" for the day or take notes.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   An app created in Developer Hub
-   A hosted app URL (Launch or custom hosting)

## What You Will Learn

-   How to add a Dashboard location to your app through the Developer Hub console.
    
-   Which properties you can configure for the location.
    
-   Where the location appears on your stack homepage after installation.
    

## Add a Dashboard Location to your App

Let's see how to add Dashboard Location to your app:

-   **Via the Developer Hub Console:**  
    To add the Dashboard Location to your app via the Developer Hub console, log in to your [Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:
    
    1.  Navigate to **App Switcher** on the top-right corner and select **Developer Hub**.
    2.  Select an application for which you want to add the Dashboard Location.
    3.  Click the **UI Locations** tab. To set the **App URL**, click the **View Hosting** link. You will be redirected to the **Hosting** tab.  
        ![View_Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4502661279fd5aa6/68303235980bb6ba0872715f/View_Hosting.png)
    4.  In the **Hosting** tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application. Click the **Save** button to save your hosting configuration.  
        ![App_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0ab1619e05e9133/68303234bcb194e9539ac1d6/App_URL.png)
    5.  Navigate to the **UI Locations** tab to configure the Dashboard location.
    6.  Hover over the **Dashboard** location, and click the **\+ Add UI Location** button.  
        ![Add_Dashboard_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteaea15ddee6577f0/68342164076eb31d745c3f6d/Add_Dashboard_Location.png)
    7.  On the resulting Configuration page, set up the configurations for Dashboard Location by providing details such as **Name**, **Path**, **Description** and **Default Width** to select the size of the widget. You can also enable the configuration using the **Enabled** toggle button.
        
        Properties that can be specified for this UI location:
        
        -   **Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
        -   **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app/).
        -   **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
        -   **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.
        
        You can configure any UI location as **mandatory** using the **Required** toggle button. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.
        
        **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.
        
        ![Stack_Dashboard_Config_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c9e664531e9f62f/68342163e962ac1867f8aec0/Stack_Dashboard_Config_Location.png)
    8.  Finally, click the **Save** button to save the Dashboard Location’s configuration details.  
        
        You will see the details of the configured UI location on the **UI Locations** tab in the **App Configuration** screen after installing the app. You can enable or disable the non-required UI locations.
        
        Apps which have the Dashboard location configured will be visible in your stack homepage.  
        For example, the app can be viewed in the Dashboard Location as shown below:  
        ![Dashboard_Location_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt04823daaa690ba8f/65b67e5cebfd035ce53d0b85/Dashboard_Location_App.png)
        
        **Note:** A single app supports up to **three** Dashboard Locations.
        
        Once you create a dashboard location, it is reflected on the stack’s dashboard page.  
        Contentstack also allows you to [customize your dashboard view](/docs/headless-cms/customize-your-dashboard-view) and arrange widgets as per your requirements.
