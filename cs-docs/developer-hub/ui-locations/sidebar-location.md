---
title: "Entry Sidebar Location"
description: "Customize the Contentstack entry editor using Sidebar Location to add custom widgets via the extension SDK."
url: /developer-hub/sidebar-location
---

# Entry Sidebar Location

## Entry Sidebar Location

The Entry Sidebar Location provides powerful functionalities that you can integrate into your [stack](/docs/headless-cms/about-stack) to analyze your [entry](/docs/headless-cms/about-entries) content and recommend ideas.  
These sidebar locations allow users to provide additional capabilities over content, thus optimizing the content to suit their requirements.

Examples of such sidebar locations are SEO tag recommendations, sentiment analysis, language translation, and so on.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login/)
-   An app created in Developer Hub
-   A hosted app URL (Launch or custom hosting)

## What You Will Learn

-   How to add an Entry Sidebar location to your app through the Developer Hub console.
    
-   Which properties you can configure for the location.
    
-   Where the location appears in the Widgets section after installation.
    

## Add an Entry Sidebar Location to your App

Let's see how to add entry sidebar location to your app:

-   **Via the Developer Hub Console:**  
    To add the entry sidebar location to your app via the Developer Hub console, login to your [Contentstack Account](https://www.contentstack.com/login) and follow the steps given below:
    
    1.  Navigate to **App Switcher** on the top-right corner and select **Developer Hub**.
    2.  Select an application for which you want to add the entry sidebar location.
    3.  Click the **UI Locations** tab. To set the **App URL**, click the **View Hosting** link. You will be redirected to the **Hosting** tab.  
        ![View_Hosting.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf879b2d8d0af9821/68343990c589ead0184bdd34/View_Hosting.png)
    4.  In the **Hosting** tab, you can select [Hosting with Launch](/docs/developer-hub/app-hosting#hosting-with-launch) or [Custom Hosting](/docs/developer-hub/app-hosting#custom-hosting) options. Select the **Custom Hosting** option to enter the hosted URL of your application. Click the **Save** button to save your hosting configuration.  
        ![App_URL.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt37093a3aeb3377a9/68343990d6011e50b9ed53c9/App_URL.png)
    5.  Navigate to the **UI Locations** tab to configure the Entry Sidebar location.
    6.  Hover over the **Entry Sidebar** location, and click the **\+ Add** **UI Location** button.  
        ![Add_Entry_Sidebar_Location.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt562e67d573d8c058/6835738f434ce7d3d342f4b5/Add_Entry_Sidebar_Location.png)
    7.  On the resulting **Configuration** page, set up the configurations for the entry sidebar location by providing details such as **Name**, **Path**, and **Description**. You can also enable the configuration using the **Enabled** toggle button.
        
        Properties that can be specified for this UI location:
        
        -   **Name (optional)**: Specifies the name of the UI location. This name will be displayed at the location after the app is installed. If not provided, the app name will be used. Ensure unique names for multiple configurations of the same location.
        -   **Signed (optional)**: When enabled, Contentstack adds a JWT token to the initial HTTP request made for your app's first page. This token can be used to verify that the request originated from Contentstack. For more information, please refer to [Signed Locations](/docs/developer-hub/securing-your-app/).
        -   **Path (optional)**: Enables you to define the location relative to the base URL where the app is hosted. This is particularly useful when the developer intends the app to appear in multiple locations.
        -   **Enabled (optional)**: Determines whether the location is visible after the app installation. If not specified, the location is enabled by default. Users can manage this option post-installation via the UI Locations tab on the app’s configuration screen.
        
        You can configure any UI location as **mandatory** using the **Required** toggle button. If the toggle is enabled, the location becomes mandatory and cannot be disabled. Whereas, if the toggle is disabled, the UI location is available to use but not mandatory.
        
        **Additional Resource:** Refer to the [Marketplace App Manifest](/docs/developer-hub/app-manifest) documentation for comprehensive details.
        
        ![Entry_Sidebar_Configuration.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb7f0393c38fded33/6835738e56223c6d1a94a328/Entry_Sidebar_Configuration.png)
    8.  Finally, click the **Save** button to save the entry sidebar location’s configuration details.
        
        You will see the details of the configured UI location on the **UI Locations** tab in the **App Configuration** screen after installing the app.
        
        You can enable or disable the non-required UI locations.
        
        Apps which have the Entry Sidebar location configured will be visible in the left navigation panel under the **Widgets** section.
        
        Navigate to the [stack](/docs/headless-cms/about-stack). In the right navigation, you will see the **Widgets** icon. Click to view the sidebar widget. You will see two tabs: **Apps** and **Extensions**.
        
        -   To set the app as the default, go to the **Apps** tab, click the three dots icon, and then click the **Set as Default App** option to pin the app at the top. OR
        -   To set the extension as the default, go to the **Extensions** tab, click the three dots icon, and then click the **Set as Default Extension** option to pin the app at the top.  
            ![Sidebar_App_New_UI.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt62357667831dbf8a/66accfd56a871d2210b8db60/Sidebar_App_New_UI.png)

You can create new entry sidebar locations by writing your custom code, or you can use the prebuilt [boilerplate](/docs/developer-hub/marketplace-app-boilerplate) and modify the given code to suit your requirements.
