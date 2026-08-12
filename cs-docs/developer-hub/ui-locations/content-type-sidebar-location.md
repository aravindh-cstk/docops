---
title: "Content Type Sidebar Location"
description: "Use the Content Type Sidebar to access TypeScript API type definitions for seamless integration."
url: /developer-hub/content-type-sidebar-location
---

# Content Type Sidebar Location

## Content Type Sidebar Location

The Content Type Sidebar Location provides the ability to access and analyze the content type data from the sidebar. For example, the Developer Tools app, provides content type definitions directly from the Content Type Sidebar.

By utilizing this location, you can enhance content types with additional capabilities, allowing you to build applications that aid in your content modeling.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   An app created in Developer Hub
-   A hosted app URL (Launch or custom hosting)

## What You Will Learn

-   How to add a Content Type Sidebar location to your app through the Developer Hub console.
    
-   Which properties you can configure for the location.
    
-   Where the location appears in the Content Models section after installation.
    

## Add a Content Type Sidebar Location to your App

Let’s see how to add Content Type Sidebar location to your app:

-   **Via the Developer Hub Console:**  
    To add the Content Type Sidebar location to your app via the Developer Hub console, login to your [Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:
    
    1.  Click the **Developer Hub** icon on the left navigation panel.  
        ![Welcome_to_Developer_Hub.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5c63262317460a13/665eb3af653cb9d069a7f067/Welcome_to_Developer_Hub.png)
    2.  Select an application for which you want to add the Content Type Sidebar location.
    3.  Click the **UI Locations** tab. To set the **App URL**, click the **View Hosting** link. You will be redirected to the **Hosting** tab.![UI Locations_Tab.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcf1c395d7883c236/67a32605434730c4fa9966f2/UI_Locations_Tab.png)
    4.  In the **Hosting** tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application. Click the **Save** button to save your hosting configuration.  
        ![App_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9daacf4b9b6f5fa5/65b7b097c025ee8846b87e82/App_URL.png)
    5.  Navigate to the UI Locations tab to configure the Content Type Sidebar location.
    6.  Click the three dots and click the **+ Add UI Location** button as shown below:
        
        ![Add_Content_Type_Sidebar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd22ef3e62a599ee7/6835750d3f2d8558e58c2187/Add_Content_Type_Sidebar.png)
    7.  On the resulting **Configuration** page, set up the configurations for the Content Type Sidebar location by providing details such as **Name**, **Path**, and **Description**. You can also enable the configuration using the **Enabled** toggle button.
        
        Properties that can be specified for this UI location:
        
        -   **Name (optional)**: It specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure you use unique names for multiple configurations of the same location.
        -   **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app/).
        -   **Path (optional)**: This property enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
        -   **Enabled (optional)**: It determines whether the location is visible after the app is installed. If not specified, the location is enabled by default. Users can manage this option post-installation via the **UI** **Locations** tab on the app’s configuration screen.
        
        You can configure any UI location as **mandatory** using the **Required** toggle button. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.
        
        **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.
        
        ![Content_Type_Sidebar.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt49d0a519f95cf78d/68357463d0f38546e144d4e8/Content_Type_Sidebar.png)
    8.  Finally, click **Save** to save the Content Type Sidebar location’s configuration details.
        
        You will see the details of the configured UI location on the **UI** **Locations** tab in the **App** **Configuration** screen after installing the app.
        
        You can enable or disable the non-required UI locations.
        
        Apps which have the Content Type Sidebar location configured will be visible in the **Content Models** section.
        
        Navigate to a particular content type and in the right navigation panel, click **Apps**.
        
        For example, the app can be viewed in the Content Type Sidebar location as shown below:
        
        ![Three_Dots_Developer_Tools.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3a0bdddcdc3aedbe/67a3262612289946da3b1237/Three_Dots_Developer_Tools.png)
